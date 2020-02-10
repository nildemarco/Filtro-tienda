const productos = [
    {
        nombre: 'Zapato negro',
        tipo: 'zapato',
        color: 'negro',
        img: './img/taco-negro.jpg',
    },
    {
        nombre: 'Zapato azul',
        tipo: 'zapato',
        color: 'azul',
        img: './img/taco-azul.jpg',
    },
    {
        nombre: 'Bota negra',
        tipo: 'bota',
        color: 'negro',
        img: './img/bota-negra.jpg',
    },
    { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
    {
        nombre: 'Zapato rojo',
        tipo: 'zapato',
        color: 'rojo',
        img: './img/zapato-rojo.jpg',
    },
];


const contenedorTarjeta = document.getElementById("tarjetas")
const formfiltro = document.getElementById("filtro")
const inputFiltro = document.getElementById("buscador")
const inputSubmit = document.querySelectorAll("input[type= 'text']")

//Funcion filtros 

const ejecutaFiltro = (valorElegido) => {
    let arrayElegido = valorElegido.toLowerCase().split(" ")

    let productosElegidos = arrayElegido.reduce((acc, curr) => {
        return acc.filter(producto => {
            return producto.color.includes(curr) ||
                producto.tipo.includes(curr) ||
                producto.nombre.toLowerCase().includes(curr)
        })

    }, productos)

    contenedorTarjeta.innerHTML = accTarjetas(productosElegidos)

}

//Funcion que acumula las tarjetas 

const accTarjetas = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + `<div class="card"><img src="${curr.img}" alt="${curr.nombre}">
     <div class="nombrecard">${curr.nombre}</div>
     </div>`
    }, "")

}
contenedorTarjeta.innerHTML = accTarjetas(productos)

formfiltro.onsubmit = e => {
    e.preventDefault()
    ejecutaFiltro(inputFiltro.value)

}

window.onkeypress = e => {
    if (e.keyCode == 13) {
        ejecutaFiltro(inputFiltro.value)
    }

}