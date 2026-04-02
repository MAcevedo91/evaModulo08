import { Router } from 'express';
import { PatientController } from '../controller/Patient.controller.js';
import { DoctorController } from '../controller/Doctor.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

router.use(verifyToken);

// Pacientes CRUD
router.post('/patients', PatientController.create);
router.get('/patients', PatientController.findAll);
router.get('/patients/:id', PatientController.findById);
router.patch('/patients/:id', PatientController.update);
router.delete('/patients/:id', PatientController.delete);

// Doctores CRUD
router.post('/doctors', DoctorController.create);
router.get('/doctors', DoctorController.findAll);
router.get('/doctors/:id', DoctorController.findById);
router.patch('/doctors/:id', DoctorController.update);
router.delete('/doctors/:id', DoctorController.delete);

export default router;
