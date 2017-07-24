function Mostrar()
{
var numero=prompt("Por favor ingrese un numero");
var primo = true;
/*var contador=0;*/

for(i=2 /*1*/ ; i<numero ; i++)

{
    if (numero%i==0)

    {
        primo=false /*contador++*/
         break;
    }
}

    if (!primo)/*(contador>2)*/ 
    {
        alert("No es primo"); 

    }
else 
{
    alert ("Es primo");
}

}




// Un numero es primo cuando tiene DOS divisores. 

