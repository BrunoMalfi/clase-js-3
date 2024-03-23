function resta (a,b){
    return a - b; 
}

function evaluacion (nota){
     switch (true) {
        case (nota <= 4 && nota >= 0):
           return "Insuficiente"
         case (nota <= 6 && nota >= 0):
             return "Suficiente"
         case (nota <= 8 && nota >= 0):
            return "Notable"
         case (nota <= 10 && nota < 11 && nota >= 0):
             return "Sobresaliente"
         default:
             return "Te lo has inventado. no está entre  0 y 10 "
       }
    
} 

function duplicaNumero (numero){
    if (typeof(numero) == "number" ){
        return numero * 2 
    } else{
        return "Debo ser ejecutada con un número"
    }
}

 function soyString( palabra){
     if (typeof(palabra) == "string") {         
        return true;
    } else {
         return false
     }
 }

 function soyStringNoVacia (palabra){
         if(soyString(palabra) && palabra.length !== 0 ) {
         return true
     } else {
         return false
     }
 }

 function errorString (palabra){
    if (soyStringNoVacia(palabra)){
        return palabra
    } else if (soyString(palabra)){
        return "Debo ser ejecutada con un string no vacío"
    } else {
        return "Debo ser ejecutada con un string"
    }
 }

function caracterInicial (palabra){
    if (errorString(palabra) == palabra) {
        return palabra.substring(0,1)
    }else {
        return errorString(palabra)
    }
}

function ultimoCaracter (palabra){
    if (errorString(palabra) == palabra) {
        return palabra.substring(palabra.length -1,palabra.length)
    }else {
        return errorString(palabra)
    }
}

//hacer funcion para las 2 opcione que se repiten en las 2 funciones anteriores. 

function esPalindromo(palabra){
    if (errorString(palabra) == palabra) {
        const arraypalabra=palabra.split('')
        let tester = []; 
        for (let i = 0; i < (arraypalabra.length - 1 ) / 2 ; i++) {
            //console.log('testing for : '+arraypalabra[i]+' | '+arraypalabra[arraypalabra.length -1 - i])
                if (arraypalabra[i] != arraypalabra[arraypalabra.length -1 - i]){
                    tester.push(i)
                }
            }
        if (tester.length == 0 ){
            return "es Palindromo"
        } else {
            let errorMessage=''; 
            for (let i of tester) {
            errorMessage = errorMessage + "\nposición " +(i +1 )+ "º  "+arraypalabra[i]+ " no coincide con " + (arraypalabra.length - i)+"º "+arraypalabra[arraypalabra.length - i - 1]+"  |"
            
            }
            return errorMessage
        }
    }else {
        return errorString(palabra)
    }
}
 function getPrecioMostrar (precio){
    if (typeof(precio) == "number"){
        return precio.toFixed(2)+"€"
    }else{
        return "no es un formato correcto"
    }
 }
 function division(a,b){
    return a/b
 }

function array5 (array){
    let resoult = [];
    for (let i of array){
        if (i >= 5 ) {
            resoult.push(i)
        }
    }
    return resoult
}
 
function primo (numero) {
    for (let i = 2 ; i < numero ; i++){
        if ( numero % i == 0 ){
            return false 
        }
    }
    return true
}

function obtenerImpares(arraynumeros){
    let impares = [];
    for (let i of arraynumeros){
        if (i % 2 == 1 ){
            impares.push(i)
        }
    }
    return impares 
}

function sumarArray(array){
    let resoult = 0 ; 
    for (let i of array ){
        resoult = resoult + i ; 
    }
    return resoult  
}

function multiplicarArray(array){
    let resoult = 1 ; 
    for (let i of array ){
        resoult = resoult * i ; 
    }
    return resoult  
}

function checkPassword(password){
    let typedPass
   for (let i = 0 ; i < 3 ; i++){
       typedPass = prompt("Introduzca contraseña ("+(i+1)+" º intento, solo tienes 3 ):")
       if (password === typedPass){
           return "Enhorabuena"
       }
   }
   return "No te sabe las password, haber estudia'o"
}



let num1
num1 = 13; 
//num1 = prompt("Introduce un número para ver si es primo :");
const arrayNumerosTest = [3,5,7,8,1,2,9] ; 
const password = "MiPass";




console.log('Resta : ', 'el resultado de  9 - 5  es : ' + resta(9,5))
console.log('Evaluación: ', ' Si è sacado un 7 tengo en  la evaluación : '+ evaluacion(7))
console.log('Evaluación: ', ' Si è sacado un 3 tengo en  la evaluación : '+ evaluacion(3))
console.log('Evaluación: ', ' Si è sacado un 9 tengo en  la evaluación : '+ evaluacion(9))
console.log('Evaluación: ', ' Si è sacado un 11 tengo en  la evaluación : '+ evaluacion(11))
console.log('Evaluación: ', ' Si è sacado un -3 tengo en  la evaluación : '+ evaluacion(-3))
console.log('duplicaNumero : ',' duplicaNumero para 3 da : '+ duplicaNumero(3))
console.log('duplicaNumero : ',' duplicaNumero para patata da : '+ duplicaNumero("patata"))

console.log('caracterInicial :', " Para undefined : "+caracterInicial(undefined))
console.log('caracterInicial :', " Para patata : "+caracterInicial('patata'))
console.log('caracterInicial :', " Para '' : "+caracterInicial(''))
console.log('ultimoCaracter :', " Para undefined : "+ultimoCaracter(undefined))
console.log('ultimoCaracter :', " Para patata : "+ultimoCaracter('patata'))
console.log('ultimoCaracter :', " Para '' : "+ultimoCaracter(''))

console.log('esPalindromo :',' hola es : '+esPalindromo("hola"))
console.log('esPalindromo :','somos es : '+esPalindromo("somos"))
console.log('esPalindromo :','locura es : '+esPalindromo("locura"))
console.log('esPalindromo :',' "" es : '+esPalindromo(""))
console.log('esPalindromo :',' undefined es : '+esPalindromo(undefined))

console.log('getPrecioMostrar :',' precio para 2  : '+getPrecioMostrar(2))
console.log('getPrecioMostrar :',' precio para 43  : '+getPrecioMostrar(43))
console.log('getPrecioMostrar :',' precio para "patata"  : '+getPrecioMostrar("patata"))
console.log('division :',' precio para division(8,4)  : '+division(8,4))
console.log('array5',' array5() para arry '+arrayNumerosTest+' : '+array5(arrayNumerosTest))
console.log('primo :',' ¿ es '+num1+' primo  ?  : '+primo(23))
console.log('obtenerImpares ',' obtenerImpares() para arry '+arrayNumerosTest+'  : '+obtenerImpares(arrayNumerosTest))
console.log('sumarArray ',' sumarArray() para arry '+arrayNumerosTest+'  : '+sumarArray(arrayNumerosTest))
console.log('multiplicarArray ',' multiplicarArray() para arry '+arrayNumerosTest+'  : '+multiplicarArray(arrayNumerosTest))
console.log('checkPassword ',' checkPassword() para  '+password+'  : '+checkPassword(password))