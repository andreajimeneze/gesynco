import express from 'express';
import { getClients, getOneClient, createNewClient, editClient } from "../controllers/clientController.js";
const router = express.Router();

router.get('/', getClients);
router.get('/:id', getOneClient);
router.post('/create', createNewClient);
router.put('/edit/:id', editClient);

export default router;
