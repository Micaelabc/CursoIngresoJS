function Mostrar()
{
var numero;
var contador=0; //Era la variables mas una constante. 
var acumulador=0; // Era un acumulador mas una variable.

while (contador<5)
{
contador++;
numero= prompt("Por favor ingrese cinco numeros");
numero=parseInt(numero); // Hay que validar con while. parseInt si no da un numero, da NaN
while (isNaN(numero))// Nos da true cuando no es un numero. Si queremos validar cuando es un numero, lo hacemos con isNaN, que nos va a decir si es NaN. 
{
numero=prompt("Ingrese otro numero");
numero=parseInt(numero);
}// NO PEDIAN ESTE PASO, PERO NOS SIRVE IGUAL. (A partir del while de is NaN),

console.log(numero);// No va, lo pusimos solo para que nos muestre si es NaN. 
acumulador= acumulador + numero; // ò se puede poner acumulador+=numero (ambas estan bien).
}
//while(numero==NaN)<-- NO VA. Tenemos que validar lo incorrecto. NaN nunca va a dar una igualdad true. Siempre va a ser false.

alert(acumulador);
alert (acumulador / contador); // ò acumulador/5; 


/* EN VEZ DE PONER LOS DOS ALERT PODEMOS HACER
document.getElementByID("Suma").value=acumulador;
document.getElementById("promedio".value=acumulador/5;
LO QUE CAMBIA CON DOCUMENT, ES QUE LOS RESULTADOS NO VAN A APARECER EN LA VENTANA QUE SE ABRE
SI NO, EN LA PANTALLA EN EL CUADRADO DONDE SE TENDRIAN QUE PONER LOS RESULTADOS.
OTRA FORMA SERIA; 
document.write(acumulador);
document.write(acumulador/contador);
LO QUE HACE WRITE ES QUE TE APAREZCA EN OTRA VENTANA EL RESULTADO.  */



}