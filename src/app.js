import express from 'express';
import compression from 'compression';
import { config } from 'dotenv';
import configJS from './config.js';
import mongoose from 'mongoose';
import 'express-async-errors'


import mocksRouter from './routes/mocks.router.js';
import { errorHandler } from './middleware/errorHandler.js';


const app = express();
const PORT = configJS.PORT|| 3000;

// Middleware
config()
app.use(express.json());
app.use(compression()) 
// Conexión a MongoDB
mongoose.connect(configJS.MONGODB_URI, {
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/api/mocks', mocksRouter);

app.get('/',(req, res)=>{

   const saludo = {
    message: "Welcome to the Mock API"
  }
   res.status(200).send({ error: null ,saludo})
})
// app.get('/', async(req, res, next)=>{
//     try {
//         res.send(word)
//     } catch (error) {
//         next(error)
//     }
// })
app.use(errorHandler)

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
