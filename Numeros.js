function operacionesConNumeros() {   
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        
        let suma = num1 + num2;
        alert("La suma de los dos números es: " + suma);
    } else if (num2 > num1) {
        
        let resultado = (num1 * num1) + (num2 * num2);
        alert("El resultado de elevar al cuadrado cada número y sumarlos es: " + resultado);
    } else {
      
        alert("Los números son iguales.");
    }
}

operacionesConNumeros();
