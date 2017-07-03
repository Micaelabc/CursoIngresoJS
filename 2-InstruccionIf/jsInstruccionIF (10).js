function Mostrar()
{ 
var nota;
nota= math.floor(math.random()*(10-1))+1;

if(nota>= 9)
{
	alert ("Excelente " +nota);
}
else
{ 
   if (nota>=4)

{
	alert ("Aprobo " +nota);
}
else
{ 
	alert ("Vamos la proxima se puede " +nota);
}
}
}