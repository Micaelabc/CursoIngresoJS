function Mostrar()
/*{  
var mes= document.getElementById('mes').value;
switch (mes)
{
case "Julio":
case "Agosto":
{
    alert("Es invierno");
}
break;
case "Enero":
case "Febrero":
case "Marzo":
case"Abril":
case"Mayo":
case"JUnio":
{
    alert("falta para el invierno");
}
break;
default:
{
    alert ("Ya paso el invierno");
}
break;
}

}*/
{
var mes= document.getElementById("mes").value;
if (mes=="Julio" || mes=="Agosto")
{
alert("Es invierno");
}

else if (mes=="Enero" || mes=="Febrero" || mes=="Marzo" || mes=="Abril" || mes=="Mayo" || mes=="Junio")
{
alert ("Falta para el invierno"); 
}

else if (mes=="Septiembre"|| mes=="Octubre" || mes=="Noviembre"|| mes=="Diciembre")
{
alert ("Ya paso el invierno");
}
}