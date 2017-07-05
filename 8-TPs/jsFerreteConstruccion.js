/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Id= Ancho
Id= Largo
Id= Radio*/

var Ancho;
var Largo;
var Radio;
var resultado;

function Rectangulo () 
{
var Ancho=document.getElementById("Ancho").value;    
var Largo=document.getElementById("Largo").value;

resultado= (parseInt(Largo)*2 +parseInt(Ancho)*2)*3;//Se multiplica por tres por las vueltas que da el hilo de alambre y no se tiene en cuenta el radio porque no lo nombra.
alert (resultado);//En el de arriba es como por ej 4*2 + 5*2=18 y despues 18*3=54

}
function Circulo () 
{
var Radio=document.getElementById("Radio").value;
resultado= (Math.PI*Radio*Radio)*3;//RECORDAR PI POR RADIO POR RADIO
alert(resultado);

}
function Materiales () 
{var cal;
var cemento;
var Ancho=parseInt(document.getElementById("Ancho").value);    
var Largo=parseInt(document.getElementById("Largo").value);
cemento=(Largo + Ancho)*2;
cal=(Largo + Ancho)*3;
alert("La cantidad de cemento es " + cemento +  "la cantidad de cal es" + cal);// Guiarse por la cantidad de bolsas
	
}