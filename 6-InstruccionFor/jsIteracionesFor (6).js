function Mostrar()
{
var numero; 
var contador=0;

numero=prompt("Por favor ingrese un numero");    

for(i=1 ; i<=numero ; i++ )

{
     if (i%2==0)

{
    alert("Este es un numero par");
    contador++;


}

}
alert (contador);
}