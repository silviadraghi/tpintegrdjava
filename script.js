const cantidadEntrada = document.getElementById("cantidadEntrada")
console.log(cantidadEntrada)
console.log(cantidadEntrada.value)
cantidadEntrada.value

const categoria=document.getElementById("categoria")
console.log(categoria)
console.log(categoria.value)

const botonCalcular=document.getElementById("botonCalcular")
console.log(botonCalcular)

const totalPagar=document.getElementById("totalPagar")
console.log(totalPagar)


/* escuchadores */
botonCalcular.addEventListener("click", calcularDescuento)

function calcularDescuento(){
    switch (categoria.value) {
        case 'Estudiante':
          totalPagar.textContent=(cantidadEntrada.value*200)*0.2;
          break;
        case 'Trainee':
            totalPagar.innerHTML=(cantidadEntrada.value*200)*0.5;
          break;
        case 'Junior':
            totalPagar.innerHTML=(cantidadEntrada.value*200)*0.85;
            break;
    
    }
    }