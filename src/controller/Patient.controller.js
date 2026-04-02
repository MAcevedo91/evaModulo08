import { PatientService } from '../services/Patient.service.js';

export class PatientController {
    static async create(req, res) {
        try {
            const data = await PatientService.create(req.body);
            res.status(201).json({
                message: 'Paciente creado con éxito',
                statusCode: 201,
                data
            });
        } catch (error) {
            res.status(400).json({
                message: 'Error al crear paciente',
                statusCode: 400,
                error: error.message
            });
        }
    }

    static async findAll(req, res) {
        try {
            const data = await PatientService.findAll();
            res.status(200).json({
                message: 'Pacientes encontrados',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al listar pacientes',
                statusCode: 500,
                error: error.message
            });
        }
    }

    static async findById(req, res) {
        try {
            const data = await PatientService.findById(req.params.id);
            res.status(200).json({
                message: 'Paciente encontrado',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(404).json({
                message: 'Paciente no encontrado o error de búsqueda',
                statusCode: 404,
                error: error.message
            });
        }
    }

    static async update(req, res) {
        try {
            const data = await PatientService.update(req.params.id, req.body);
            res.status(200).json({
                message: 'Paciente actualizado con éxito',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(400).json({
                message: 'Error al actualizar paciente',
                statusCode: 400,
                error: error.message
            });
        }
    }

    static async delete(req, res) {
        try {
            await PatientService.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({
                message: 'Error al eliminar paciente',
                statusCode: 400,
                error: error.message
            });
        }
    }
}
