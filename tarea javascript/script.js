function solicitarEdad() {
    let edad = prompt("Por favor, ingresa tu edad:");
    edad = Number(edad);

    if (!isNaN(edad)) {
        if (edad >= 18) {
            alert("Eres mayor de edad.");
            console.log("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
            console.log("Eres menor de edad.");
        }
    } else {
        alert("No ingresaste un número válido.");
        console.log("No ingresaste un número válido.");
    }
}

function verificarNumero() {
    let numero = prompt("Por favor, ingresa un número:");
    numero = Number(numero);

    if (!isNaN(numero)) {
        if (numero >= 0) {
            alert("El número es positivo.");
            console.log("El número es positivo.");
        } else {
            alert("El número es negativo.");
            console.log("El número es negativo.");
        }
    } else {
        alert("No ingresaste un número válido.");
        console.log("No ingresaste un número válido.");
    }
}

function verificarParidad() {
    let numero = prompt("Por favor, ingresa un número para verificar si es par o impar:");
    numero = Number(numero);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            console.log("El número es par.");
            alert("El número es par.");
        } else {
            console.log("El número es impar.");
            alert("El número es impar.");
        }
    } else {
        alert("No ingresaste un número válido.");
        console.log("No ingresaste un número válido.");
    }
}

function calcularDescuento() {
    let totalCompra = prompt("Por favor, ingresa el total de la compra:");
    totalCompra = Number(totalCompra);

    if (!isNaN(totalCompra)) {
        if (totalCompra > 100) {
            let totalConDescuento = totalCompra * 0.9;
            alert("El total con descuento es: $" + totalConDescuento.toFixed(2));
            console.log("El total con descuento es: $" + totalConDescuento.toFixed(2));
        } else {
            alert("El total sin descuento es: $" + totalCompra.toFixed(2));
            console.log("El total sin descuento es: $" + totalCompra.toFixed(2));
        }
    } else {
        alert("No ingresaste un número válido.");
        console.log("No ingresaste un número válido.");
    }
}

function compararNumeros() {
    let numero1 = prompt("Por favor, ingresa el primer número:");
    let numero2 = prompt("Por favor, ingresa el segundo número:");
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero1 > numero2) {
            alert("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
            console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
        } else if (numero2 > numero1) {
            alert("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
            console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
        } else {
            alert("Ambos números son iguales (" + numero1 + ").");
            console.log("Ambos números son iguales (" + numero1 + ").");
        }
    } else {
        alert("No ingresaste números válidos.");
        console.log("No ingresaste números válidos.");
    }
}

function clasificarNota() {
    let nota = prompt("Por favor, ingresa una nota entre 0 y 100:");
    nota = Number(nota);

    if (!isNaN(nota) && nota >= 0 && nota <= 100) {
        if (nota >= 90) {
            alert("Excelente");
            console.log("Excelente");
        } else if (nota >= 70) {
            alert("Bueno");
            console.log("Bueno");
        } else if (nota >= 50) {
            alert("Regular");
            console.log("Regular");
        } else {
            alert("Insuficiente");
            console.log("Insuficiente");
        }
    } else {
        alert("No ingresaste una nota válida.");
        console.log("No ingresaste una nota válida.");
    }
}

function elegirMenu() {
    let opcion = prompt("Elige una opción de menú: 1 para 'Pizza', 2 para 'Hamburguesa', 3 para 'Tacos', 4 para 'Perros calientes', 5 para 'Quesadillas':");
    opcion = Number(opcion);

    switch(opcion) {
        case 1:
            alert("Has seleccionado Pizza.");
            console.log("Has seleccionado Pizza.");
            break;
        case 2:
            alert("Has seleccionado Hamburguesa.");
            console.log("Has seleccionado Hamburguesa.");
            break;
        case 3:
            alert("Has seleccionado Tacos.");
            console.log("Has seleccionado Tacos.");
            break;
        case 4:
            alert("Has seleccionado Perros calientes.");
            console.log("Has seleccionado Perros calientes.");
            break;
        case 5:
            alert("Has seleccionado Quesadillas.");
            console.log("Has seleccionado Quesadillas.");
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
            console.log("Opción no válida.");
            break;
    }
}

function adivinarNumero() {
    
    const numeroCorrecto = Math.floor(Math.random() * 10) + 1;

    
    let numeroAdivinado = prompt("Adivina un número entre 1 y 10:");
    numeroAdivinado = Number(numeroAdivinado);

    
    if (!isNaN(numeroAdivinado) && numeroAdivinado >= 1 && numeroAdivinado <= 10) {
        if (numeroAdivinado === numeroCorrecto) {
            alert("¡Número correcto!");
            console.log("¡Número correcto!");
        } else {
            alert("Error, intenta de nuevo. El número correcto era " + numeroCorrecto + ".");
            console.log("Error, intenta de nuevo. El número correcto era " + numeroCorrecto + ".");
        }
    } else {
        alert("ese numero no esta entre 1 y 10.");
        console.log("No ingresaste un número válido entre 1 y 10.");


        function menuEjercicios() {
            let opcion = prompt("Selecciona una opción:\n1. Solicitar Edad\n2. Verificar Número Positivo o Negativo\n3. Verificar Par o Impar\n4. Calcular Descuento\n5. Comparar Números\n6. Clasificar Nota\n7. Elegir Menú\n8. Adivinar un Número\n9. Calcular Precio Final\n10. Autenticación de Usuario");
        
            switch (opcion) {
                case "1":
                    solicitarEdad();
                    break;
                case "2":
                    verificarNumero();
                    break;
                case "3":
                    verificarParidad();
                    break;
                case "4":
                    calcularDescuento();
                    break;
                case "5":
                    compararNumeros();
                    break;
                case "6":
                    clasificarNota();
                    break;
                case "7":
                    elegirMenu();
                    break;
                case "8":
                    adivinarNumero();
                    break;
                case "9":
                    calcularPrecioFinal();
                    break;
                case "10":
                    autenticarUsuario();
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona una opción entre 1 y 10.");
                    console.log("Opción no válida.");
                    break;
            }
        }
    }
}
