const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Critters = require('critters-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      main: "./src/main.ts"
    },
    output: {
      path: path.resolve(__dirname, "dist"), // Pasta de saída para os arquivos do Webpack
      filename: "[name].[contenthash].js", // Nome do arquivo de saída
    },
    resolve: {
      extensions: [".ts", ".js"], // Extensões que o Webpack deve resolver
    },
    devServer: {
      port: 8080,
      hot: false,
      liveReload: true,
      watchFiles: ["./src/**"],
      open: ["http://localhost:8080/index.html"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/, // Regra para arquivos .ts
          use: "ts-loader", // Use o ts-loader para transpilar TypeScript para JavaScript
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Adicione os loaders nesta ordem
            // 'style-loader', // Transfere os estilos para o DOM
            MiniCssExtractPlugin.loader,
            "css-loader", // Converte CSS para módulos CommonJS
            "sass-loader", // Compila Sass para CSS
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(), // Plugin para otimizar o CSS
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // Arquivo HTML de origem (opcional)
        inject: true, // Injetar as tags de script no corpo do HTML
        templateParameters: {
          // Defina suas variáveis aqui
          title: "Rota da Cerveja",
          language: "pt",
          scriptLoading: "async", // Carregar os scripts de forma assíncrona
          url:
            argv.mode === "production"
              ? ""
              : "http://localhost:8080",
        },
      }),
      new MiniCssExtractPlugin({
        filename: "styles.[contenthash].css", // Nome do arquivo CSS gerado
      }),
      new Critters({
        // Opções do webpack-critters aqui
        preload: 'swap',
        preloadFonts: true
      }),
      // Plugin para converter arquivos PNG e JPEG para WebP
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 100,
            },
          },
        ],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/assets",
            to: "assets",
            globOptions: {
              ignore: ["**/fonts/**"], // Ignora a pasta "fonts"
            },
          },
          // Adicione mais arquivos ou diretórios conforme necessário
        ],
      }),
    ],
  };
};