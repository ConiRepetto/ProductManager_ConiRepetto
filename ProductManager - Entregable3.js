// Consigna

// Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
// Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 
// Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
// El servidor debe contar con los siguientes endpoints:
// ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.
// Si no se recibe query de límite, se devolverán todos los productos
// Si se recibe un límite, sólo devolver el número de productos solicitados
// ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 
// Sugerencias
// Tu clase lee archivos con promesas. recuerda usar async/await en tus endpoints
// Utiliza un archivo que ya tenga productos, pues el desafío sólo es para gets. 
// Formato del entregable
// Link al repositorio de Github con el proyecto completo, el cual debe incluir:
// carpeta src con app.js dentro y tu ProductManager dentro.
// package.json con la info del proyecto.
// NO INCLUIR LOS node_modules generados.


import fs from 'fs'
//const fs = require('fs')


class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = ProductManager.randomId(5) //cantidad de caracteres en el ID
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.path = ProductManager.productPath(this.id);
    }

    static products = []

    static randomId = (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    //La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
    static productPath = (id) => {
        fs.writeFileSync(`./${id}.txt`, `Product ID: ${id}`)

        if (fs.existsSync(`./${id}.txt`)) { //verificar que exista
            // let contenido = fs.readFileSync(`./${id}.txt`, "utf-8")
            // console.log(contenido)

        }
        return (`./${id}.txt`)
    }


    getProducts = () => {
        console.log(ProductManager.products)
    }

    addProduct = () => {
        if (
            ProductManager.products.find(item => item.code === this.code)
        ) {
            console.log("Producto ya ingresado, proba con otro")
        } else {
            ProductManager.products.push({
                id: `${this.id}`,
                title: `${this.title}`,
                description: `${this.description}`,
                price: `${this.price}`,
                thumbnail: `${this.thumbnail}`,
                code: `${this.code}`,
                stock: `${this.stock}`,
                path: `${this.path}`
            }), console.log(`Se agrego tu producto " ${this.title} " ! `)
        }
    }

    getProductById = (idBuscado) => {
        let resultadoBuscado = ProductManager.products.find(item => item.id === idBuscado)

        if (
            resultadoBuscado === idBuscado
        ) {
            console.log(resultadoBuscado)
        } else {
            console.log(`Not found`)
        }
    }

    updateProduct = (idModificar) => {
        fs.writeFileSync(`./${idModificar}.txt`,
        ` Product ID: ${this.id}
        title: ${this.title}, 
        description: ${this.description}, 
        price: ${this.price},
        thumbnail: ${this.thumbnail},
        code: ${this.code}, 
        stock: 6666666 `)
        console.log(`Se modifico el producto " ${idModificar} " ! `)
    }

    deleteProduct = (idEliminar) => {
        fs.unlinkSync(`./${idEliminar}.txt`)
        console.log(`Se elimino el producto " ${idEliminar} " ! `)
    }
}


let productoNuevo1 = new ProductManager("producto prueba 1", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25) //  Se creará una instancia de la clase “ProductManager”

let productoNuevo2 = new ProductManager("producto prueba 2", "Este es un producto prueba", 500, 'Sin imagen', "abc123", 25);

let productoNuevo3 = new ProductManager("producto prueba 3", "Este es un producto prueba", 600, 'Sin imagen', "abc456", 25);

productoNuevo1.getProducts(); // Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

productoNuevo1.addProduct(); // Se llamará al método “addProduct”

productoNuevo1.getProducts();

productoNuevo2.addProduct(); //devuelve error porque ya hay un producto con el mismo codigo que el nuevo producto

productoNuevo3.addProduct();

console.log(ProductManager.products);

productoNuevo3.getProductById("abc457");
//productoNuevo3.deleteProduct("GaAgv");
productoNuevo3.updateProduct("ZgfGQ");