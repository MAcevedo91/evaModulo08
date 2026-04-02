import { Patient } from '../models/Patient.model.js';
import { Logger } from '../utils/Logger.js';

export class PatientService {
    static logger = new Logger('PATIENT_SERVICE');

    static async create(data) {
        try {
            this.logger.info('Creando nuevo paciente');
            const newPatient = await Patient.create(data);
            return newPatient;
        } catch (error) {
            this.logger.error(`Error al crear paciente: ${error.message}`);
            throw error;
        }
    }

    static async findAll() {
        try {
            this.logger.info('Obteniendo todos los pacientes');
            return await Patient.findAll();
        } catch (error) {
            this.logger.error(`Error al buscar pacientes: ${error.message}`);
            throw error;
        }
    }

    static async findById(id) {
        try {
            this.logger.info(`Buscando paciente por ID: ${id}`);
            const patient = await Patient.findByPk(id);
            if (!patient) throw new Error('Paciente no encontrado');
            return patient;
        } catch (error) {
            this.logger.error(`Error al buscar paciente: ${error.message}`);
            throw error;
        }
    }

    static async update(id, data) {
        try {
            this.logger.info(`Actualizando paciente ID: ${id}`);
            const patient = await this.findById(id);
            return await patient.update(data);
        } catch (error) {
            this.logger.error(`Error al actualizar paciente: ${error.message}`);
            throw error;
        }
    }

    static async delete(id) {
        try {
            this.logger.info(`Eliminando paciente ID: ${id}`);
            const patient = await this.findById(id);
            await patient.destroy();
            return true;
        } catch (error) {
            this.logger.error(`Error al eliminar paciente: ${error.message}`);
            throw error;
        }
    }
}
