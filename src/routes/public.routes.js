import { Router } from 'express';
import { apiInfo } from '../controller/Public.controller.js';

const router = Router();

router.get('/', apiInfo);

export default router;
