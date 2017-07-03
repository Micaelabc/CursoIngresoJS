function Mostrar()
/*{
  
var mes= document.getElementById('mes').value;
 switch (mes)
{
case "Enero":
{
alert ("Que comiences bien el año!"); 
}
break;

case "Marzo":
{
    alert ("A clases!!")
}
break;

case "Julio":
{alert("Se vienen las vacaciones");
}
break;   

case "Diciembre":
{alert("Felices fiestas!");
}
break;  
}
}*/

{ 
var mes= document.getElementById('mes').value;

if (mes=="Enero")

{
alert("Que comiences bien el año");
}

else if (mes=="Marzo")

{
alert("A clases!");
}

else if (mes=="Julio")

{
alert("Se vienen las vacaciones!");
}

else if (mes=="Diciembre")

{
alert("Felices fiestas!");
}
else 
{
alert (" ");
}

}