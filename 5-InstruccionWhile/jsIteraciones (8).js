function Mostrar()
{
var numero=0;
var acumuladorSuma;
var respuesta= true;
var acumuladorMult=1;

while (respuesta) // ò puede ser respuesta.tolowercase()=="Si"

{
numero=prompt("Ingrese el numero");	
numero=parseInt(numero);
//validar

if (numero>=0)
{
acumuladorSuma=acumuladorSuma + numero; // Puede ser tambien AcumuladorSuma+=numero
}
else
{
acumuladorMult= acumuladorMult * numero; // Puede ser tambien acumuladorMult*=numero	
}
}
respuesta=confirm();


}