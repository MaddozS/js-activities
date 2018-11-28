//hacer un array e imprimirlo por completo
var array = [1, 2, 3];
console.log(array);

//hacer un array e imprimir cada valor uno por uno
var array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//manejar el DOM
// let li = document.getElementById('lista');
//var nom = ["luis", "eyder", "jorge"];
        
//añadir valores a la lista del HTML
let li = document.getElementById('lista');
let val = document.getElementById('valores')

var nom = ["luis", "eyder", "jorge"];

function agregarElemento () {
    var elemento = val.value;
    nom.push(elemento);
    li.innerHTML += "<li>" + elemento + "</li>";
}

for (let i = 0; i < nom.length; i++) {
    li.innerHTML += "<li>" + nom[i] + "</li>";
}

//Imprimir los numeros pares, junto con un texto diciendo "es par", sino es par, poner "no es par"
var lista = document.getElementById('numbers');
var numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0){
        lista.innerHTML += "<li>" + numeros[i] + " es par </li>";
    }
    else{
        lista.innerHTML += "<li>" + numeros[i] + " no es par </li>";
    }
}

//Crear hasta el elemento N de fibonacci
var entrada = document.getElementById('valorFib');
var sucesion = document.getElementById('fibo');
var fib = [0, 1];

function crearFib(){
    if(entrada.value == 0){
        sucesion.innerHTML = fib[0];
    }
    else if(entrada.value == 1){
        sucesion.innerHTML = fib;
    }
    else{
        var newValue = 0;
        for (let i = 1; i < entrada.value; i++) {
            newValue = fib[i - 1] + fib[i];
            fib[i + 1] = newValue;
        }
        //Imprime la sucesion y luego reinicia el array
        fibo.innerHTML = fib;
        fib = [0, 1];
    }
    
    
}

//Empezando con los objetos JSON 
//veamos el siguiente array...
var yo = ["Axel", "Anaya", 18];
//Ese soy yo, el primer valor de mi array es mi nombre, el segundo mi apellido, el tercero es mi edad
//El problema de esta notación que no se identifica de manera correcta que es el valor, sino que simplemente está en una posición
//Aquí entra JSON (JavaScript Object Notation)
var yo = {
    nombre: "Axel",
    apellido: "Anaya",
    edad: 18,
    foto: "img.jpg"
}

function tarjeta(){
    document.getElementById('myName').innerHTML += yo.nombre;
    document.getElementById('myLastName').innerHTML += yo.apellido;
    document.getElementById('myAge').innerHTML += yo.edad;
    document.getElementById('myPhoto').setAttribute('src', yo.foto);
}

//Creando multiples tarjetas

var foo = {
    nombre: "Luis",
    apellido: "Elondio",
    edad: 20,
    foto: "img2.jpg"
}
var personas = [yo, foo];
var cards = document.getElementById('cardContainer');

function tarjetas(){
    for (let i = 0; i < personas.length; i++) {
        var text = "<div class='card'>";
        text += '<p>' + personas[i].nombre + '</p>';
        text += '<p>' + personas[i].apellido + '</p>';
        text += '<p>' + personas[i].edad + '</p>';
        text += '<img src=' + personas[i].foto + ' alt="foto de ' + personas[i].nombre +'">';
        text += "</div>";
        cards.innerHTML += text;
    }
}
