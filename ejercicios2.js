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
let sum = 0;
for (var i = 1; i <= 100; i++);{
    sum += i;
}
console.log("la suma de los numeros del 1 al 100 es:", + sum);



