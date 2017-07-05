/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;/*Le sumamnos su valor,y un valor constante, con el 0 
el contador pasa a valer 1. Podemos poner contador+1; o contador +=1; o contador ++; o ++contador;*/
var contador=0;
var numeros;


function comenzar()
{ 
var numeros=Math.floor(Math.random()*(101-1))+1;//Estoy generando el numero entre 1 y 100
console.log(numeros);
}

function verificar()

{
contador++;

var numUser= document.getElementById("numero").value;
if(numero==numUser)
{
 alert("Gano en " +  contadorIntentos + " intentos");
 contador=0;
}
else
{if (numUser<numero)
 
{
alert("Falta" +contador);
}	
else 
{
alert("Se pasa" +contador );
}
}
}