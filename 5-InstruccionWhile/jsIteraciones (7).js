function Mostrar()
{
var numero=0;
var contador=0;
var acumulador=0;
var respuesta=true;

while (respuesta)// Podria ser while(confirm("Desea continuar?))
{
contador++;
numero= prompt("Por favor ingrese numeros");
numero=parseInt(numero);	
acumulador=acumulador + contador
respuesta=confirm();//Si es que es si. Si no, usamos prompt y ponemos prompt=("Por favor ponga Si, si quiere continuar);
}/* No ponemos nada en los parentesis de confirm, porque nos va a devolver true o false, si es true va a continuar
si es false, no va a seguir*/

alert(acumulador);
alert (acumulador/contador);
}