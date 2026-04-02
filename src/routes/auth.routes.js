import { Router } from 'express';
import { loginUsuario } from '../controller/Auth.controller.js';

const router = Router();

router.post('/', loginUsuario);

export default router;
