import { Router } from 'express';
import authRoutes from './auth.routes.js';
import clinicRoutes from './clinic.routes.js';
import fileRoutes from './file.routes.js';
import publicRoutes from './public.routes.js';

const router = Router();

router.use('/login', authRoutes);
router.use('/about', publicRoutes);
router.use('/', clinicRoutes);
router.use('/files', fileRoutes);

export default router;
