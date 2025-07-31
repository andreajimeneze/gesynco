import express from 'express';
import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import negotiationRoutes from './routes/negotiationRoutes.js';
import { sequelize } from './models/index.js';

import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/public', express.static(path.join(process.cwd(), 'public')));

app.use( '/api', authRoutes );
app.use( '/api/news', newsRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/negotiations', negotiationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Escuchando puerto ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');
    } catch {
        console.log('Error al conectar a la base de datos');
    }
})

export default app;