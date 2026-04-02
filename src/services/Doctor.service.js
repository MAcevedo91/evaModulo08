import { Doctor } from '../models/Doctor.model.js';
import { Logger } from '../utils/Logger.js';

export class DoctorService {
    static logger = new Logger('DOCTOR_SERVICE');

    static async create(data) {
        try {
            this.logger.info('Creando nuevo doctor');
            const newDoctor = await Doctor.create(data);
            return newDoctor;
        } catch (error) {
            this.logger.error(`Error al crear doctor: ${error.message}`);
            throw error;
        }
    }

    static async findAll() {
        try {
            this.logger.info('Obteniendo todos los doctores');
            return await Doctor.findAll();
        } catch (error) {
            this.logger.error(`Error al buscar doctores: ${error.message}`);
            throw error;
        }
    }

    static async findById(id) {
        try {
            this.logger.info(`Buscando doctor por ID: ${id}`);
            const doctor = await Doctor.findByPk(id);
            if (!doctor) throw new Error('Doctor no encontrado');
            return doctor;
        } catch (error) {
            this.logger.error(`Error al buscar doctor: ${error.message}`);
            throw error;
        }
    }

    static async update(id, data) {
        try {
            this.logger.info(`Actualizando doctor ID: ${id}`);
            const doctor = await this.findById(id);
            return await doctor.update(data);
        } catch (error) {
            this.logger.error(`Error al actualizar doctor: ${error.message}`);
            throw error;
        }
    }

    static async delete(id) {
        try {
            this.logger.info(`Eliminando doctor ID: ${id}`);
            const doctor = await this.findById(id);
            await doctor.destroy();
            return true;
        } catch (error) {
            this.logger.error(`Error al eliminar doctor: ${error.message}`);
            throw error;
        }
    }
}
