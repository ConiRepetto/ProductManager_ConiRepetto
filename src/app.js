import express from 'express'

const app = express();









//Configurar Servidor
const port = 8080
app.listen(port, () => {
    console.log('Servidor ejecutandose en el puerto: ', port)
})