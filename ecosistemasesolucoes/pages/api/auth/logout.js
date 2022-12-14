import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const secret = process.env.SECRET;

export default async function (req, res){
    const token = sign({
        exp: Math.floor(Date.now() / 1000) + 1,
        username: 'andre',
    }, secret);

    const serialized = serialize("loginJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60,
        path: "/"
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({results: 'done'});
}
