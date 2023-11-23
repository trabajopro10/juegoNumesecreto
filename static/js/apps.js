/* ESTO SE TRATA DE DESCUBRIR EL NÚMERO CORRECTO, SE GENERA UN VALOR ALEATORIO E INICIAMOS A BUSCARLOS DIGITANDO Y COMPARANDO INTERNAMENTE HASTA HALLAR EL CORRECTO  

***** !! EL RESULTADO APARECE EN LA PANTALLA AZUL EN LETRA BLANCA !!! *****
*/

/* GENERA Y GUARDA EL NÚMERO SECRETO */
var numeroSecreto = parseInt(Math.random()*100 + 1);
var intentos = 0;

/* HACE UN WHILE QUE RECORRE UN CICLO Y SOLO TERMINARÁ SI EL NÚMERO DIGITADO ES IGUAL AL NÚMERO SECRETO */
 while ((numeroDigitado != numeroSecreto)) {
   /* PREGUNTA CADA VEZ QUE NECESITA QUE DIGITEMOS UN VALOR PARA SABER SI ES IGUAL AL NÚMERO SECRETO */
  var numeroDigitado = prompt("NUMERO DE INTENTOS !! " + intentos +  " !! \nVamos a digitar un número del 1 al 100, pero guiese con los mensajes ");
  if (numeroDigitado > 0){
    /* SI HA ENCONTRADO EL NÚMERO AUTOMÁTCAMENTE MUESTRA EL MENSAJE DE ÉXITO */
     if (numeroDigitado == numeroSecreto)    
       /* 
          HAY UNA FUNCIÓN QUE PODEMOS VER EN LA PARTE INFERIOR LLAMADA fnIntentos Y  VALIDA LOS INTENTOS QUE 
          SE HACEN Y DEMOSTRAR QUE TAN CONCENTRADOS ESTAMOS 
       */
      document.write(fnIntentos(intentos) + " Lo logro en " + intentos + " intentos, ... acerto,  es el Numero .. -> " + numeroDigitado);
    
    /* AL HACER UNA OPERACIÓN DE DIVIDIR EL NÚMERO DIGITADO POR EL NÚMERO SECRETO, SI ESTE SOBRE PASA 1 
       QUIERE DECIR QUE EL NÚMERO DIGITADO ES MAYOR AL SECRETO NOS ALEJAMOS*/
    else if (numeroSecreto<numeroDigitado)
     alert(numeroDigitado + " Hemos sobrepasado la cantidad del numero secreto ");
    /*  SI ESTAMOS EN EL 90% O SUPERIOR, ESTAMOS CERCA DE ADIVINAR EL NÚMERO SECRETO  */
    else if ((numeroDigitado/numeroSecreto)>=0.9)
     alert(numeroDigitado + " Estamos bastante cerca de averiguar el numero secreto ");
    /* SI EL NÚMERO ES INFERIOR AL 50% DEL VALOR DEL NÚMERO SECRETO, ENTONCES DECIMOS QUE ESTAMOS LEJOS DE 
      HALLAR EL NÚMERO SECRETO */
    else if ((numeroDigitado/numeroSecreto)<0.5)
     alert(numeroDigitado + " Estamos lejos hay que subir mas la cantidad ");
    /* SI ESTAMOS EN EL 50% O SUPERIOR, ESTAMOS CERCA DE ADIVINAR EL NÚMERO SECRETO  */
    else if ((numeroDigitado/numeroSecreto)>=0.5)
      alert(numeroDigitado + " Estamos acercandonos hay que subir mas la cantidad ");
  intentos++;
  }
}

/* SE VALIDAN LOS INTENTOS PARA SABER QUE TAN CONCENTRADOS ESTAMOS   */
function fnIntentos(numintentos){
  var msgResultado = "";
  var intentosExcelente = 3;
  var intentosNormal = 7;
  var intentosDemorado = 10;
  var intentosNoConcentrados = 13;
  
  /* HACE UNA COMPARACIÓN DE INTENTOS Y DETERMINA QUE TAN CONCENTRADOS ESTAMOS */
  
  if (numintentos <=  intentosExcelente)
    msgResultado = " EXCELENTE, ESTA MUY CONCENTRADO ... ";
  else if (numintentos <= intentosNormal )
    msgResultado = " MUY BIEN, ESTA CONCENTRADO ... ";
  else if (numintentos <= intentosDemorado )
    msgResultado = " ESTÁ BIEN, PERO VAMOS A MEJORAR ... ";
  else if (numintentos <= intentosNoConcentrados )
    msgResultado = " SEGURO ESTA HACIENDO OTRA COSA Y POR ESO ESTÁ DESCONCENTRADO, PERO VAMOS ... ";
  return msgResultado;
}