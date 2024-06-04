import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, type, format = 'webp' } = req.query;

    const uri = `${process.env.STORAGE_URI}${type}/${name}.${format}`;
    
    try {
        const response = await axios.get(uri, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', response.headers['content-type']);
        console.log(response.headers['content-type'])
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

}

export default handle;