import express from 'express';
import 'dotenv/config';

const app = express()
const port = process.env.PORT; // Configurar el puerto para desplegar application


// TODO:Middleware

app.get('/', (req, res) => {
   res.send('Hello World!!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});