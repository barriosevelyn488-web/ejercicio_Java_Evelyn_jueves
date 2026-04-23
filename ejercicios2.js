
function funcionPar(){
    var par = Number(prompt("ingrese su numero:"));
    if (par > 0){
        console.log("el numero es positivo");
    } else if (par < 0){
        console.log("el numero es negativo");
    }  else {
        console.log("el numero es 0");
    }

    return par;
}

funcionPar();



