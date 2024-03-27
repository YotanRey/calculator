// Muestra un mensaje de bienvenida
alert("Hola, bienvenido y bienvenida a la calculadora");

// Solicita al usuario que ingrese el primer numero y lo convierta en numero punto flotante
var numero1 = parseFloat(prompt("Por favor ingresa un numero del 0 al infinito"));

//Muestra el numero ingresado por el usuario
alert("Elegiste el numero " + numero1);

//solicita al usuario que ingrese el segundo numero y lo convierte en numero punto flotante
var numero2 = parseFloat(prompt("Por favor ingresa un segundo numero del 0 al infinito"));

// muestra el segundo numero ingresado por el usuario
alert("Tu segundo numero es " + numero2);

// solicita al usuario que elija una operacion
alert("Elige la operacion que deseas hacer con los numeros " + numero1 + " y " + numero2);

// solicita al usuario que elija una operacion y la convierte a un numero entero  
var operacion = parseInt(prompt("Elige una opcion.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es divicion."));

// variable para almacenar el resultado de la operacion
var resultado;

// variable para almacenar el nombre de la operacion realizada
var nombre="";

// verifica que operacion a eligido el usuario y realiza la operacion correspondiente 
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = "la resta es " + resultado;
}else if(operacion == 3){
    resultado = numero1 * numero2;
    nombre = " la multiplicacion es " + resultado;
}else if(operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = "la divicion es " + resultado;
    } else{
        nombre = "no se puede dividir por cero";
    }
} else{
    nombre = "operacion no valida";
}

// muestra el resultado de la operacion
alert(nombre);

// muestra los numeros ingresados por el usuario y el resultado de la operacion
document.write("Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);
