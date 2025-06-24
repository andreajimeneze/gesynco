import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './models/index.js';

const app = express();

app.use(express.json());

app.use( '/api/users', userRoutes);

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