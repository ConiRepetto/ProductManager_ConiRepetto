import express from 'express'

const app = express();

const frase = "Holaa Coniii como estas hoy ?"

app.get('/api/getFrase', (req, res) => {
    res.send(frase) //response ante la request sera enviar frase
})

//Devolver letra segun su numero de posicion
app.get('/api/getLetra/:num', (req, res) => {
    let num = parseInt(req.params.num)
    if ((!isNaN(num))) {
        if (num >= 1 && num <= frase.length) {
            res.send(frase[num - 1]) //-1 porque?
        } else {
            res.send({
                error: "El parametro esta fuera de rango"
            })
        }
    } else {
        res.send({
            error: "El parametro no es un numero"
        })
    }

})

//Devolver palabra segun su numero de posicion
app.get('/api/getPalabra/:num', (req, res) => {
    let num = parseInt(req.params.num)
    if ((!isNaN(num))) {
        let palabras = frase.split(' ') //separar la frase en los espacios, crea un array
        if (num >= 1 && num <= frase.length) {
            res.send(palabras[num - 1]) //-1 porque?
        } else {
            res.send({
                error: "El parametro esta fuera de rango"
            })
        }
    } else {
        res.send({
            error: "El parametro no es un numero"
        })
    }

})









//Configurar Servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto: ', PORT)
})
server.on('error', error => console.log('Error en el servidor: ', error))