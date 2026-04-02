import { DoctorService } from '../services/Doctor.service.js';

export class DoctorController {
    static async create(req, res) {
        try {
            const data = await DoctorService.create(req.body);
            res.status(201).json({
                message: 'Doctor creado con éxito',
                statusCode: 201,
                data
            });
        } catch (error) {
            res.status(400).json({
                message: 'Error al crear doctor',
                statusCode: 400,
                error: error.message
            });
        }
    }

    static async findAll(req, res) {
        try {
            const data = await DoctorService.findAll();
            res.status(200).json({
                message: 'Doctores encontrados',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al listar doctores',
                statusCode: 500,
                error: error.message
            });
        }
    }

    static async findById(req, res) {
        try {
            const data = await DoctorService.findById(req.params.id);
            res.status(200).json({
                message: 'Doctor encontrado',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(404).json({
                message: 'Doctor no encontrado o error de búsqueda',
                statusCode: 404,
                error: error.message
            });
        }
    }

    static async update(req, res) {
        try {
            const data = await DoctorService.update(req.params.id, req.body);
            res.status(200).json({
                message: 'Doctor actualizado con éxito',
                statusCode: 200,
                data
            });
        } catch (error) {
            res.status(400).json({
                message: 'Error al actualizar doctor',
                statusCode: 400,
                error: error.message
            });
        }
    }

    static async delete(req, res) {
        try {
            await DoctorService.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({
                message: 'Error al eliminar doctor',
                statusCode: 400,
                error: error.message
            });
        }
    }
}
