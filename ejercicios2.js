//ejercicio1
function funcionPar(){
    var par1 = Number(prompt("ingrese su numero:"));
    if (par1 > 0){
        console.log("el numero es positivo");
    } else if (par1 < 0){
        console.log("el numero es negativo");
    }  else {
        console.log("el numero es 0");
    }

    return par1;
}

//funcionPar();//

// ejercicio 2
function funcionPar2(){
    var num = Number(prompt("ingrese su numero"));
    if (num % 2 == 0){
        console.log("el numero es par");
    } else if (num % 2 != 0 ){
        console.log("el numero es impar");
    } else {
        console.log("numero invalido")
    }

    return num;

}

//funcionPar2();//


//ejercicio 3
function Mayoredad(){
    var edad = Number(prompt("ingrese su edad"));
    if (edad >= 18){
        console.log("usted es mayor de edad");
    } else if (edad < 18){
        console.log("usted es menor de edad");
    } else {
        console.log("usted es un adulto mayor");
    }

    return edad;

}

//Mayoredad();//

//ejercicio 4
function NumAcend(){
    console.log("los numeros de del 1 al 10 son:");
    for (var i = 1; i <= 10; i++){
        console.log(i);
    }
}

//NumAcend();//

//ejercicio 5
function Numdesc(){
    console.log("los numeros del 10 al 1 son;");
    let i = 10;
    while ( i >= 1){
        console.log(i);
        i--;
    }
}

//Numdesc();//

//ejercicio 6 
function TablaMultiplicar(){
    var nume = Number(prompt("ingrese un numero para mostrar su tabla"));
    console.log("la tabla de multiplicar del ", nume, "es:");
    for (var i = 1; i <= 10; i++){
        console.log(nume, "x", i, "=", nume * i);
    }
}

//TablaMultiplicar();//

//ejercicio 7
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma = suma + i;
}
console.log("La suma del 1 al 100 es: " + suma);


//ejercicio 8
function calcularMayor(){
    var numro1 = Number(prompt("ingrese el primer numero"));
    var numro2 = Number(prompt("ingrese el segundo numero"));
    if (numro1 > numro2){
        console.log("el numero mayor es: ", numro1);
    } else if (numro2 > numro1){
        console.log("el numero mayor es: ", numro2);
    } else {
        console.log("los numeros son iguales");
    }
}
//calcularMayor();//

//ejercicio 9 contar letras de una palabra con ciclo
let palabra6 = prompt("ingrese una palabra");
let contador = 0;
for (let i = 0; i < palabra6.length; i++) {
    contador++;
}
console.log("la palabra tiene", contador, "letras");


//ejercicio 10 cuantas vocales tiene una palabra
let palabra7 = prompt("ingrese una palabra");
let contadorVocales = 0;
for (let i = 0; i < palabra7.length; i++) {
    let letra = palabra7[i].toLowerCase();  
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++;
    }
}
console.log("la palabra tiene", contadorVocales, "vocales");


//ejercicio 11 funcion que reciba un numero y muestre todos los pares hasta ese numero
function mostrarPares(){
    var numero = Number(prompt("ingrese un numero"));
    console.log("los numeros pares hasta el ", numero, "son:");
    for (let i = 2; i <= numero; i += 2) {
        console.log(i);
    }
}
//mostrarPares();//

//ejercicio 12 funcion que calcule el factorial de un numero
function factorial() {
    let n = Number(prompt("Ingrese un numero para factorial"));
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    console.log("El factorial de " + n + " es: " + resultado);
}
//factorial();//

//ejercicio 13 funcion que reciba una frase y la imprima caracter por caracter 
function imprimirCaracteres() {
    let frase = prompt("Ingrese una frase:");
    for (let i = 0; i < frase.length; i++) {
        console.log(frase[i]);
    }
}
//imprimirCaracteres();//

// ejercicio 14 
function invertirPalabra(palabra) {
    let invertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida = invertida + palabra[i];
    }
    console.log("Resultado: " + invertida);
}

//invertirPalabra(prompt("Palabra a invertir:"));//

//ejercicio 15
function esPalindroma(palabra) {
    let alReves = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        alReves = alReves + palabra[i];
    }

    if (palabra == alReves) {
        console.log("Es palíndroma");
    } else {
        console.log("No es palíndroma");
    }
}

//esPalindroma(prompt("Verificar si es palíndroma:"));//


//ejercicio 16
function sumarParesCincuenta() {
    let sumaPares = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            sumaPares = sumaPares + i;
        }
    }

    console.log("La suma de todos los números pares del 1 al 50 es: " + sumaPares);
}

//sumarParesCincuenta();//


//ejercicio 17
function verificarPrimo(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }

    if (divisores == 2) {
        console.log(numero + " es primo");
    } else {
        console.log(numero + " no es primo");
    }
}

verificarPrimo(Number(prompt("Ingresa un número:")));


// ejercicio 18 funcion mostrar patron
function mostrarPatron() {
    let filas = 5; 

    for (let i = 1; i <= filas; i++) {
        let linea = ""; 
        for (let j = 1; j <= i; j++) {
            linea = linea + "*";
        }

        console.log(linea);
    }
}
mostrarPatron();

//ejercicio 19
function cajero(saldo, retiro) {
    if (retiro <= saldo) {
        saldo = saldo - retiro;
        console.log("Retiro exitoso. Nuevo saldo: " + saldo);
    } else {
        console.log("No puedes retirar esa cantidad.");
    }
}

let miSaldo = 1000;
let miRetiro = Number(prompt("¿Cuánto deseas retirar?"));
cajero(miSaldo, miRetiro);


//ejercicio 20
function login(usuario, contrasena) {
    let uCorrecto = "admin";
    let pCorrecta = "1234";

    if (usuario == uCorrecto && contrasena == pCorrecta) {
        console.log("Login exitoso");
    } else {
        console.log("Datos incorrectos");
    }
}

let u = prompt("Usuario:");
let p = prompt("Password:");
login(u, p);







