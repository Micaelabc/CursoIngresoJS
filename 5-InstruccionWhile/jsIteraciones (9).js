function Mostrar()
{
var respuesta="si";
var max;
var min;
var numero;
var primera=true;

while (respuesta)
{
numero=prompt("Ingresar numero");
numero=parseInt(numero);
respuesta=confirm();

if(primera)/* Valor looweano, es BANDERA, toma dos valores 
            por ej true o false, va a loowear porque queremos distinguir entre dos funciones
            Quiero saber con BANDERA, cuando ocurre algo POR PRIMERA VEZ. No deja de ser una variable.*/
{
max=numero;
min=numero;
primera=false;
}
else
{
if (numero<min)
{
min=numero;
}
if ( numero>max)
{
max=numero;
}
}
document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;
}
}