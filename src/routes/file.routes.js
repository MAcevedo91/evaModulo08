import { Router } from 'express';
import { FileController } from '../controller/File.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { validateFile } from '../middleware/file.middleware.js';

const router = Router();

router.use(verifyToken);

router.post('/upload', validateFile, FileController.upload);
router.get('/', FileController.findAll);

export default router;
