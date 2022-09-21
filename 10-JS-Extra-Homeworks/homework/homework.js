// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (var clave in objeto) {
    matriz.push([clave,objeto[clave]])
  }
  return matriz;
}
// 1° Paso: Crear una matríz vacia.
// 2° Paso: recorrer el objeto con "for in". 
// 3° Paso: usar ".push" para agregar la clave y el objeto con clave para dar forma a la matríz vacia.
// 4° Paso: retornar la matríz.



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (let i = 0; i < string.length; i++) {
    if (objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1;
    }
    else {
      objeto[string[i]] = 1; 
    }
  }
  return objeto;
}
// 1° Paso: Crear un objeto vacio.
// 2° Paso: recorrer el string.
// 3° Paso: Preguntar si el objeto vacio tiene la propiedad string[i] (que se está recorriendo).
// 4° Paso: En caso de que objeto vacio que alverga string[i] (objeto[string[i]]) se le suma 1.
// 5° Paso: Si el objeto vacio no alverga string[i] se lo iguala a 1.
// 6° PAso: retornar objeto fuera del bucle. 

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculasPrimero = '';
  var minusculas = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      minusculas = minusculas + s[i];
      } else {
        mayusculasPrimero = mayusculasPrimero + s[i];
      } 
}
 return mayusculasPrimero + minusculas;
}

// 1° Paso: Crear una propiedad String vacia.
// 2° Paso: Crear otra propiedad String vacia y definitiva.
// 3° Paso: recorrer el string.
// 4° Paso: En caso de que objeto vacio que alverga string[i] (objeto[string[i]]) se le suma 1.
// 5° Paso: Si el objeto vacio no alverga string[i] se lo iguala a 1.
// 6° PAso: retornar objeto fuera del bucle.

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str2 = str.split(' ');
  var arrayFianl = str2.map(function(ele){
    return ele.split('').reverse().join('');
  })
  return arrayFianl.join(' ');
} 
// 1° Paso: Crear una variable de string aplicando la propiedad ".split" con un espacio entre las "" en su argumento, para marcar donde separar los elementos
// 2° Paso: Crear otra variable donde se la iguala a la primer variable creada aplicando la propiedad ".map" y en su argumento creamos la función,
// en el argumento de la función colocamos "ele" (por elemento del string) y retornamos el elemento aplicando las funciones  
// 1) ".split" con '' (sin espacio) en su argimento (para que cada elemento sea parte de un array, cada elemento por separado).
// 2) ".reverse" propiedad que invierte el orden de cada array formadopor los elementos. 
// 3) ".join" para concatenar en un String todos los elementos de los arrays.
// 3° Paso: retornar fuera de la declaración de la variable, el segundo array con la propiedad ".join", y en su argumento un espacioentre las ""
// Esto es para que el aaray final returno un string donde los elementos están separados por un espacio.


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString();
  var resultado = numeroString.split('').reverse().join('');
  if (numeroString === resultado) {
    return 'Es capicua';
  }
  else {return 'No es capicua';}
}

// 1° Paso: Declarar una variable igualandola, convirtiendo en String al argumento numero
// 2° Paso: Declarar la variable resultado igualandola al string creado en la variable anterior, aplicando las propiedades:
// 1) .split para pasar elementos del string a un array, solo colocando '' en el argumento  
// 2) .reverse para invertir el orden de los elementos
// 3) .join para volver a colocar los elementos en un String solo colocando '' en el argumento
// 3° Paso: comparar si la primer variable declarada, es igual a la segunda variable.
// 1) si la coparacion da true se retorna respuesta capicua
// 2) Para todo lo demas, no es capicua, retornandose esto ultimo, fuera del if
//


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinabc = '';
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c') {
      continue;
    } else {
      sinabc = sinabc + cadena[i]; //o se puede poner sinabc =+ cadena[i];
    }
} 
 return sinabc;
}

// 1° Paso: Declarar un String vacio. 
// 2° Paso: Iterar la cadena de string en un bucle "for". 
// 3° Paso: Preguntar en un "if" si el elemento "i" de la cadena es igual a las letras que se desea eliminar.
// 4° Paso: Utilizar "continue" para saltear acción en el bucle en caso de encontrar coincidencia.  
// 5° Paso: declarar un else donde se iguala el String vacio a la suma del string vacio con el elemento "i" de la cadena.
// 6° Paso: Retornar el string declararo, pero fuera del bucle una vez agregados los elementos solicitados 
//
//
//



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var cambio = true;
  while(cambio) {
    var cambio = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i +1].length) {
         var aux = arr[i];
         arr[i] = arr[i + 1];
         arr[i + 1] = aux;
         cambio = true;
      }
    }
  }
  return arr;
}

// 1° Paso: Declarar una variable booleana lñlamada cambio para esta matriz
// 2° Paso: Usar un While con cambio en el argumento.
// 3° Paso: dentro del bloque, se decalra falsa la variable cambio
// 4° Paso: iterar en un for el arr donde al usar la propiedad .length se le resta uno para poder comparar todos los elementos con otros elementos del mismo arrayy ninguno quede sin ser 
// 5° Paso: usar if para preguntar si el valor de la primer posición tomada es mayor que el de la que le sigue.  
// a) en el caso de ser menor: se toma el valor siguiente y se hace la misma comparación con el elemento siguiente
// b) en el caso de ser mayor: se decalra un auxiliar con el valor de la posición tomada
// 6° Paso: se iguala el valor de la posición tomada en el lugar de la posición siguiente.
// 7° Paso: se iguala el valor de la posición siguiente con el auxiliar.
// 8° Paso: se declara el cambio a true nuevamente, para que se ejecute nuevamente el while. Esto se realiza, para iterar nuevamente el for y realizar los cambios susecivamente una y otra vez, hasta que el bucle no tenga la necesidad de realizar mas cambios de ordenamiento
// 9° Paso: una vez que todos los cambios fuero realizados, y la función noop tenga la necesidad de entrar al bucle while, se retorna arr (ya con todos los cambios realizados)


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var coincidencia = [];
    for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j]) {
          coincidencia.push(arreglo1[i] || arreglo2[j]);
        }
      }
    } 
    return coincidencia;
}


// 1° Paso: Declarar un array vacio donde pushear los resultados en el futuro.
// 2° Paso: Iterar en un "for" el arreglo1 
// 3° Paso: Anidar otro "for" para iterar el arreglo3
// 4° Paso: Preguntar en un "if" si el elemento "i" del arreglo1 es igual al elemento "j" del arreglo2
// 5° Paso: Utilizar .push para agregar el elemento "i" del arreglo1 ó el elemento "j" del arreglo2 al array declarado al principío.
// 6° Paso: Retornar el array declarado, fuera del bucle: 
// a) Si no hubo considencias entre el arreglo1 y el arreglo2 se retornara vacio el array declarado.
// b) si hubo coicidencias, se retornará el array declarado con los elementos agregados en el bucle. 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

