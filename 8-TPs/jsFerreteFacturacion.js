/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Id=PrecioUno
Id=PrecioDos
Id=PrecioTres*/

var PrecioUno;
var PrecioDos;
var PrecioTres;
var resultado;
function Sumar () 

{
var PrecioUno=document.getElementById("PrecioUno").value;
var PrecioDos=document.getElementById("PrecioDos").value;
var PrecioTres=document.getElementById("PrecioTres").value;

resultado=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
alert(resultado);
}

function Promedio () 
{
var PrecioUno=parseInt(document.getElementById("PrecioUno").value);
var PrecioDos=parseInt(document.getElementById("PrecioDos").value);
var PrecioTres=parseInt(document.getElementById("PrecioTres").value); 	

resultado=(PrecioUno+PrecioDos+PrecioTres)/3;
alert(resultado);
}

function PrecioFinal () 
{
var PrecioUno=document.getElementById("PrecioUno").value;
var PrecioDos=document.getElementById("PrecioDos").value;
var PrecioTres=document.getElementById("PrecioTres").value;

resultado=(parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres))*1.21
alert(resultado);
	
}