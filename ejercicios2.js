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

funcionPar();

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

funcionPar2();


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

Mayoredad();

//ejercicio 4
for 




