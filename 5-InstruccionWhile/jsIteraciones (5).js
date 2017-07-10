function Mostrar()
{
var sexo = prompt("ingrese f ó m .");

while (sexo!="f" && sexo!="m")
/* Se tiene que cumplir las dos condiciones si o si. 
Y, es && porque si pusieramos || abarcaria todo. Porque con uno que sea verdadero, ya ingresa. 
Y nunca va  ser falso si pongo ||. Tiene que ser distinta a F y distinta a M. 
Otra forma: while !(sexo=="f" || sexo=="m") Cambiamos la igualdad y el numerador. */

{
sexo=prompt("Ingrese el dato correcto, por favor");
}

}