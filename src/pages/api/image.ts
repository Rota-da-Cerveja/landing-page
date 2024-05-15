import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, colorType, aspectRatio, type, format = 'png' } = req.query;

    const uri = `${process.env.BUCKET}/public/${type}/${name}_${colorType}_${aspectRatio}.${format}`;

    try {
        const response = await axios.get(uri, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

}

export default handle;