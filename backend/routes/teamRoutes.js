import express from 'express';
import { getTeam, getMember, createNewMember, editMember } from "../controllers/teamController.js";

const router = express.Router();

router.get('/', getTeam);
router.get('/:id', getMember);
router.post('/create', createNewMember);
router.put('/edit/:id', editMember);


export default router;