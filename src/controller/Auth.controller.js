import { User } from '../models/User.model.js';
import { comparePassword } from '../utils/password.utils.js';
import { generateToken } from '../utils/generateToken.utils.js';
import { Logger } from '../utils/Logger.js';

const logger = new Logger('AUTH_CONTROLLER');

export const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'El email y el password son obligatorios' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = generateToken(user);
        res.status(200).json({ token });
    } catch (error) {
        logger.error(`Error de login: ${error.message}`);
        res.status(500).json({ error: 'Error del servidor en el inicio de sesión' });
    }
};
