//import fs from 'fs'
//const fs = require('fs')


class ProductManager {
    constructor(title, description, price, thumbnail, code, stock, categoria) {
        //this.id = ProductManager.randomId(5) //cantidad de caracteres en el ID
        this.id= 0;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.categroia = categoria;
        //this.path = ProductManager.productPath(this.id);
        this.products = []
    }

    //static products = []

    // static randomId = (length) => {
    //     let result = ''
    //     const characters = '0123456789'
    //     for (let i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    //     return result;
    // }

    // //La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
    // static productPath = (id) => { //no recibe los datos, da undefined
    //     fs.writeFileSync(`./productos/${id}.txt`,
    //     `Product ID: ${id}
    //     title: ${this.title}, 
    //     description: ${this.description}, 
    //     price: $ ${this.price},
    //     thumbnail: ${this.thumbnail},
    //     code: ${this.code}, 
    //     stock:${this.stock},
    //     categoria: ${this.categoria}
    //     `)

    //     if (fs.existsSync(`./${id}.txt`)) { //verificar que exista
    //         // let contenido = fs.readFileSync(`./${id}.txt`, "utf-8")
    //         // console.log(contenido)

    //     }
    //     return (`./${id}.txt`)
    // }

    listar(id){
        let prod = this.products.find(prod => prod.id == id)
        return prod || {error: 'Producto NO encontrado'}
    }

    listarAll(){
        return this.products.length? this.products : {error: 'No hay productos cargados'}
    }

    guardar(prod){
        prod.id = ++this.id
        this.products.push(prod)
    }

    actualizar(prod, id){
        prod.id = Number(id)
        let index = this.products.findIndex(prod => prod.id == id)
        this.products.splice(index, 1, prod)
    }

    borrar(id){
        let index = this.products.findIndex(prod => prod.id == id)
        return this.products.splice(index, 1)
    }
}
//     getProducts = () => {
//         console.log(ProductManager.products)
//     }

//     addProduct = () => {
//         if (
//             ProductManager.products.find(item => item.code === this.code)
//         ) {
//             console.log("Producto ya ingresado, proba con otro")
//         } else {
//             ProductManager.products.push({
//                 id: `${this.id}`,
//                 title: `${this.title}`,
//                 description: `${this.description}`,
//                 price: `${this.price}`,
//                 thumbnail: `${this.thumbnail}`,
//                 code: `${this.code}`,
//                 stock: `${this.stock}`,
//                 categoria: `${this.categroia}`,
//                 path: `${this.path}`
//             }), console.log(`Se agrego tu producto " ${this.title} " ! `)
//         }
//     }

//     getProductById = (idBuscado) => {
//         let resultadoBuscado = ProductManager.products.find(item => item.id === idBuscado)

//         if (
//             resultadoBuscado === idBuscado
//         ) {
//             console.log(resultadoBuscado)
//         } else {
//             console.log(`Not found`)
//         }
//     }

//     updateProduct = (idModificar, newTitle, newDescription, newPrice, newThumbnail, newCode, newStock, newCategoria) => {
//         fs.writeFileSync(`./productos/${idModificar}.txt`,
//         ` Product ID: ${idModificar}
//         title: ${newTitle}, 
//         description: ${newDescription}, 
//         price: ${newPrice},
//         thumbnail: ${newThumbnail},
//         code: ${newCode}, 
//         stock: ${newStock},
//         categoria: ${newCategoria}`)
//         console.log(`Se modifico el producto " ${idModificar} " ! `)
//     }

//     deleteProduct = (idEliminar) => {
//         fs.unlinkSync(`./${idEliminar}.txt`)
//         console.log(`Se elimino el producto " ${idEliminar} " ! `)
//     }
// }


// let productoNuevo3 = new ProductManager("Iphone", "Este es un producto prueba", 1600, 'Sin imagen', "abc456", 15, "tecno");
// // let productoNuevo2 = new ProductManager("Vaso termico", "Este es un producto prueba", 1600, 'Sin imagen', "abc456", 8, "hogar");
// // let productoNuevo1 = new ProductManager("Crema Facial", "Este es un producto prueba", 1600, 'Sin imagen', "abc456", 10, "cosmetica");

// // productoNuevo1.getProducts(); // Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

// // productoNuevo1.addProduct(); // Se llamará al método “addProduct”

// // productoNuevo1.getProducts();

// // productoNuevo2.addProduct(); //devuelve error porque ya hay un producto con el mismo codigo que el nuevo producto

// // productoNuevo3.addProduct();

// console.log(ProductManager.products);

// // productoNuevo3.getProductById("abc457");
// //productoNuevo3.deleteProduct("GaAgv");

// // productoNuevo3.updateProduct("E6E88", "E6E88", "Crema Facial", "Este es un producto prueba", 1600, 'Sin imagen', "abc456", 10, "cosmetica");

export default ProductManager