import dotenv from 'dotenv';
dotenv.config();

export const env = {
    auth: {
        saltRound: Number(process.env.SALT_ROUNDS) || 10,
        secret: process.env.JWT_SECRET || 'secret123',
        expiresIn: process.env.EXPIRES_IN || '1h'
    }
};
