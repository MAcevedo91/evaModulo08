import jwt from 'jsonwebtoken';
import { env } from '../config/env.config.js';

export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token.' });
    }

    const token = bearerHeader.split(' ')[1];
    
    if (!token) {
         return res.status(401).json({ error: 'Formato de token inválido.' });
    }

    try {
        const decoded = jwt.verify(token, env.auth.secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido o expirado.' });
    }
};
