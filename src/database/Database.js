import { dbConfig } from "../config/db.config.js"
import { initUser, User } from "../models/User.model.js"
import { initPatient } from "../models/Patient.model.js"
import { initDoctor } from "../models/Doctor.model.js"
import { Logger } from "../utils/Logger.js"


export class DB {
    static logger = new Logger('DATABASE')

    static async init() {
        try {
            this.logger.info('Inicializando base de datos')

            this.logger.debug('Autenticando en Base de datos')
            await dbConfig.authenticate()
            this.logger.debug('Autenticado con éxito en la DB')

            this.initModel(dbConfig)

            this.logger.info('Sincronizando con la Base de datos')
            await dbConfig.sync({ alter: true })
            this.logger.info('Sincronización completa')
            
            await this.seedData()
        } catch (error) {
            this.logger.error('No pudimos conectarnos a la base de datos: ' + error.message)
            process.exit(1)
        }
    }

    static initModel(config) {
        try {
            this.logger.info('Inicializando modelos')

            initUser(config)
            initPatient(config)
            initDoctor(config)
            
            this.logger.debug('Modelos inicializados con éxito')
        } catch (error) {
            this.logger.error(`Error al inicializar el modelo: ${error.message}`);
            throw new Error('Error al inicializar modelos')
        }
    }
    
    static async seedData() {
        const admin = await User.findOne({ where: { email: 'admin@clinica.com' }});
        if (!admin) {
            await User.create({
                email: 'admin@clinica.com',
                password: 'password123'
            });
            this.logger.info('Usuario administrador de prueba creado: admin@clinica.com / password123');
        }
    }
}