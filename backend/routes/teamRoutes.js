import express from 'express';
import { getTeam, getMember, createNewMember, editMember } from "../controllers/teamController.js";
import { createUploadMiddleware } from '../middlewares/multer.js';

const router = express.Router();

const uploadTeam = createUploadMiddleware('team');

router.get('/', getTeam);
router.get('/:id', getMember);
router.post('/create', uploadTeam.single('imagen'), createNewMember);
router.put('/edit/:id', uploadTeam.single('imagen'), editMember);


export default router;