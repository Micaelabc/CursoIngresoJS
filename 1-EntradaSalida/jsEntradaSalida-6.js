/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{var numeroUno = document.getElementById ("numeroUno"). value;
 var numeroDos = document.getElementById ("numeroDos"). value;
  //parseInt lo usamos para convertir los numeros que lee como texto, para poder hacer las cuentas
var numeroConvertidoUno = parseInt(numeroUno);
var numeroConvertidoDos = parseInt(numeroDos);
alert(numeroConvertidoUno + numeroConvertidoDos);


}

