import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {

    const uri = `http://127.0.0.1:8000/landing-page/breweries.json`;

    try {
        const response = await axios.get(uri, { responseType: 'json' });
        res.setHeader('Content-Type', response.headers['content-type']);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

}

export default handle;