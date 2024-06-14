import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {

    const uri = `${process.env.API_URI}/content`;

    try {
        const response = await axios.get(uri, { responseType: 'json' });
        res.setHeader('Content-Type', response.headers['content-type']);
        console.log(response.data);
        res.send(response.data);
        } catch (error) {
        console.log(error);
        res.status(200).json({  breweries: ["capibabier", "ekaut", "riffen", "marcolino", "manguezal", "doutorado-do-chopp"] });
    }

}

export default handle;