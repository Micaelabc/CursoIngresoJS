function Mostrar()
/*
{

var mes = document.getElementById('mes').value;
switch (mes)
{
case "Febrero" :
alert ("Este mes tiene 28 dias");
break;

case "Enero":
case "Marzo":
case "Mayo":
case"Julio":
case"Agosto":
case"Octubre":
case"Diciembre":
alert("Este mes tiene 31 dias");
break;

default:
alert("Este mes tiene 30 dias");
break;
}
}*/

{
var mes= document.getElementById("mes").value;
if (mes=="Febrero")
{
alert("Este mes tiene 28 dias");
}	

else if (mes=="Enero" || mes=="Marzo" || mes=="Mayo" || mes=="Julio" || mes=="Agosto" || mes=="Octubre" || mes=="Diciembre")
{alert ("Este mes tiene 31 dias");    
}	

else  
{
 alert ("Este mes tiene 30 dias");   
}


}