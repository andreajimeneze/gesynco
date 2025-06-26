import express from 'express';
const router = express.Router();
import { getNews, getOneNews, createNews, editNews, deleteNews } from "../controllers/NewsController.js";


router.get('/', getNews);
router.get('/:id', getOneNews);
router.post('/create', createNews);
router.put('/edit/:id', editNews);
router.delete('/delete/:id', deleteNews);

export default router;
