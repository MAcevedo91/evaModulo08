import express from 'express';
import cors from 'cors';
import { DB } from '../database/Database.js';
import { Logger } from '../utils/Logger.js';
import router from '../routes/index.routes.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { fileUploadMiddleware } from '../middleware/file.middleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function bootstrap(options = {}) {
    const logger = new Logger('SERVER');
    try {
        logger.info('Iniciando sistema...');

        // Iniciar base de datos
        await DB.init();

        const app = express();

        // Configuración Middlewares Globales
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        // Integrar middleware custom de subida de archivos
        app.use(fileUploadMiddleware);

        // Rutas
        app.use('/api', router);

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            logger.info(`Servidor escuchando en puerto ${port}`);
        });

    } catch (error) {
        logger.error(`Error crítico en arranque de servidor: ${error.message}`);
        process.exit(1);
    }
}
