import express from 'express'

const app = express();

//Rutas del servidor
app.get('/bienvenida', (req, res) => {
    res.send(`<html><body><p style="color: blue">HOla Coni!</p></body></html>`) //response ante la request sera enviar frase
})

app.get('/usuario', (req, res) => {
    const usuario = {nombre: "Coni", apellido: "Repetto", edad: 27, correo: "bla bla"};
    res.send(usuario)
})


// const frase = "Holaa Coniii como estas hoy ?"

// app.get('/api/getFrase', (req, res) => {
//     res.send(frase) //response ante la request sera enviar frase
// })

// //Devolver letra segun su numero de posicion
// app.get('/api/getLetra/:num', (req, res) => {
//     let num = parseInt(req.params.num)
//     if ((!isNaN(num))) {
//         if (num >= 1 && num <= frase.length) {
//             res.send(frase[num - 1]) //-1 porque?
//         } else {
//             res.send({
//                 error: "El parametro esta fuera de rango"
//             })
//         }
//     } else {
//         res.send({
//             error: "El parametro no es un numero"
//         })
//     }

// })

// //Devolver palabra segun su numero de posicion
// app.get('/api/getPalabra/:num', (req, res) => {
//     let num = parseInt(req.params.num)
//     if ((!isNaN(num))) {
//         let palabras = frase.split(' ') //separar la frase en los espacios, crea un array
//         if (num >= 1 && num <= frase.length) {
//             res.send(palabras[num - 1]) //-1 porque?
//         } else {
//             res.send({
//                 error: "El parametro esta fuera de rango"
//             })
//         }
//     } else {
//         res.send({
//             error: "El parametro no es un numero"
//         })
//     }

// })









//Configurar Servidor
const port = 8080
app.listen(port, () => {
    console.log('Servidor ejecutandose en el puerto: ', port)
})