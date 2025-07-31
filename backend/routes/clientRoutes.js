import express from 'express';
import { getClients, getOneClient, createNewClient, editClient } from "../controllers/clientController.js";
import { createUploadMiddleware } from '../middlewares/multer.js';

const router = express.Router();
const uploadClients = createUploadMiddleware('clients');


router.get('/', getClients);
router.get('/:id', getOneClient);
router.post('/create', uploadClients.single('imagen'), createNewClient);
router.put('/edit/:id', uploadClients.single('imagen'), editClient);

export default router;
