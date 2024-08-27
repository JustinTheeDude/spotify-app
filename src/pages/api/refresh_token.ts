import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler( req: NextApiRequest, res: NextApiResponse,) {
    const token = await axios(process.env.NEXT_PUBLIC_SPOTIFY_ACCESS_TOKEN_ENDPOINT!, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
            grant_type: "client_credentials",
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        },
    })

    return res.status(200).json({ accessToken: token.data.access_token })
}