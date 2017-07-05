function Mostrar()/*
{
var mes = document.getElementById('mes').value;
switch (mes)
{
case "Febrero":
alert("Este mes no tiene mas de 29 dias");

break;
default:

alert("Este mes tiene 30 dias o mas");
break;
}
	


}//FIN DE LA FUNCIÓN*/

{
var mes=document.getElementById("mes").value;
if (mes=="Febrero")
{
alert ("Este mes no tiene mas del 29 dias");
}

else 
{
alert("Este mes tiene 30 dias o mas");
}
}