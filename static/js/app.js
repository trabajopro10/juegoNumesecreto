// Utilizando los selectores del DOM vamos seleccionar la etiqueta h1 y con innerHtml le agregaremos un texto 
// A la variable del número secreto se llena con la función que lo genera 

// Guardar los números secretos que se van generando, de esta manera si al generar un  nuevo número 
// este ya se ha generado antes, se guarda en un arreglo y se vuelve a generar hasta que se genere
// un nuevo número aletorio que no se haya generado antes 

let arrNumeroSecreto = [];
// El número de intentos que tiene la persona para jugar 
let nuIntentos = 3;
// el número máximo del númerop secreto
let nuMaximoSecreto = 4;
let nuCantidadVecesNumSecreto = 3;
var nuInteGeneNumeSecreto = 0;

let numeroSecreto = fngeneraNumeroSecreto();

// BORRA EL ÚLTIMO VALOR DIGITADO PARA CONTINUAR 
// DIGITANDO NUEVOS VALORES 
function fnlimpiarValorDigitado(){
    document.querySelector('#idnumeroUsuario').value = "";
    if (nuIntentos==0){
        // Habilitamos el botón de nuevo Juego 
        fnOnOffNuevoJuego('enabled');
    }
}

// Se coloca dentro del campo idnuevoJuego disabled para apagarlo y enable para encenderlo, 
// vemos que igual se usa disable en ambos casos, pero al ejecutar el removeAttribute 
// implica como si se hiciera un enable 
function fnOnOffNuevoJuego(estadoNuevoJuego){
    estadoNuevoJuego == 'enabled' ? document.getElementById('idnuevoJuego').removeAttribute('disabled') : 
                                    document.getElementById('idnuevoJuego').setAttribute('disabled','true');
}

// LLEVA EL CURSOR AL CAMPO DONDE DIGITAMOS CADA VALOR A COMPARAR CON EL 
// NÚMERO SECRETO 
function foco(){
    document.querySelector('#idnumeroUsuario').focus();
   }

// LLENA CAMPOS DEL HTML CON UN TEXTO 
function fnAsignarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;    
    return;
}

// FUNCION GENERA EL NÚMERO SECRETO 
function fngeneraNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*nuMaximoSecreto)+1;  
    console.log(arrNumeroSecreto , numeroSecreto);
    console.log("Tamaño del arreglo ", arrNumeroSecreto.length + " Numero Maximo " + nuMaximoSecreto);
    
    if (parseInt(arrNumeroSecreto.length) == parseInt(nuMaximoSecreto) )
        return;
    else {
        if(arrNumeroSecreto.includes(numeroSecreto)){
            fnAsignarTexto("#idpMensajes",`ESTE  ${numeroSecreto} YA, SE HA USADO SE GENERARÁ UNO NUEVO ... `); 
            return fngeneraNumeroSecreto();
        }else{
            // AGREGAMOS EL NÚMERO SECRETO AL ARREGLO,PORQUE SABEMOS 
            // QUE SE ESTÁ GENERANDO UN NUMERO QUE NO EXISTE EN EL ARREGLO
            arrNumeroSecreto.push(numeroSecreto);
            return numeroSecreto; 
        }
    }     
    console.log("PARA DONDE COJIO  ", numeroSecreto);
}

// FUNCIÓN QUE VALIDA SI YA SEA LLEGADO AL TOPE DEL ARREGLO Y LOS NÚMEROS SECRETOS GUARDADOS 
function fnValidaTopeArreglo(numLongArreglo, numTopeArreglo){
    if (parseInt(numLongArreglo) == parseInt(numTopeArreglo)+1){
       return true;
    }
    return false;
}


// CAPTURAR EL VALOR EN EL INPUT 
function fninputNumero(){
    // Algo importante que anotar es que podemos acceder al id del campo de dos maneras 
    // 1- por el querySelector, y acá le colocamos al campo el signo #NombreDelId, de esta forma 
    // accedemos al campo, 
    // -2 cuando usamos getElementById, no es necesario colocar el #, con solo colocar el nombre 
    // del id es suficiente. ejemplo document.getElementById('idnumeroUsuario');
    if (parseInt(arrNumeroSecreto.length) != parseInt(nuMaximoSecreto)){
        var numeroDigitado = document.querySelector('#idnumeroUsuario').value;
        console.log("Este es el número digitado " + numeroDigitado.value);
        return numeroDigitado; 
    }else{
        fnAsignarTexto("#idpMensajes",`DEBEMOS REINICIAR EL JUEGO PARA CONTINUAR, YA EL ARREGLO TIENE  ${nuMaximoSecreto} Y ES EL MÁXIMO ... `); 
        fnOnOffNuevoJuego("enabled");
    }
    
}

// VERIFICAR SI LUEGO DE DIGITAR 
function fnverificarInput(){
    console.log("INTENTOS ", nuIntentos);
        let numeroDigitado = fninputNumero();
        if (parseInt(numeroDigitado) <= parseInt(nuMaximoSecreto) ){
            nuIntentos--;
            // RECORDEMOS EL === CUANDO SE COMPARA EL VALOR Y TAMBIEN EL TIPO DE DATOS 
            if(numeroSecreto===parseInt(numeroDigitado)){
                fnAsignarTexto("#idpMensajes",`Bien ha acertado el numero secreto ${numeroSecreto}`);
                // Habilitamos el botón de nuevo Juego y colocamos el número de intentos a cero 
                fnOnOffNuevoJuego('enabled');
                nuIntentos = 0;
            }else if (parseInt(numeroDigitado)<numeroSecreto)
                    fnAsignarTexto("#idpMensajes",`El número digitado ${numeroDigitado} es menor,  le quedan ${nuIntentos} ${ nuIntentos >= 1 ? 'Intento' : (nuIntentos == 0 ? 'Cero intentos, fue lo último, suerte la próxima ' : 'Intentos') } .!!Ánimo !! ..`);  
            else if (parseInt(numeroDigitado)>numeroSecreto)
                    fnAsignarTexto("#idpMensajes",`El número digitado ${numeroDigitado} es mayor,  le quedan ${nuIntentos} ${ nuIntentos >= 1 ? 'Intento' : (nuIntentos == 0 ? 'Cero intentos, fue lo último, suerte la próxima ' : 'Intentos') } ..!!Ánimo !! ..`);  
        }else if (nuMaximoSecreto < parseInt(numeroDigitado))
                fnAsignarTexto("#idpMensajes",`CON ${numeroDigitado} HA SUPERADO EL TOPE DEL NÚMERO SECRETO QUE ES ... ${nuMaximoSecreto}`);  
        fnlimpiarValorDigitado()  ;
        foco();     
        console.log("LUEGO ", nuIntentos);
    return;
}

// EVALUA LOS INTENTOS REALIZADOS 
function fnverificarIntento(){
    var btnIntento = document.querySelector('#btnIntento');
    btnIntento.addEventListener("click",function(){
     if ( fnValidaTopeArreglo(arrNumeroSecreto.length, nuMaximoSecreto+1)){
            fnAsignarTexto("#idpMensajes"," SE HA ALCANZADO EL TOPE DE NÚMEROS QUE SE PUEDEN GENERAR, DEBE RECARGAR LA PÁGINA PARA REINICIAR EL ARREGLO DE NÚMEROS SECRETOS ... "); 
            // Se habilita el Botón de nuevo juego 
            fnOnOffNuevoJuego('enabled');
            arrNumeroSecreto.length = 0;
     }else if (nuIntentos > 0) 
        fnverificarInput();
     else fnAsignarTexto("#idpMensajes","HEMOS ALCANZADO EL TOTAL DE INTENTOS REINICIE PARA VOLVERLO A INTENTAR ... ");    
    });
}

// REINICIAR EL JUEGO Y VALIDA SI AÚN HAY INTENTOS
function fnnuevoJuevo(){
    var idnuevoJuego = document.querySelector('#idnuevoJuego');
        idnuevoJuego.addEventListener("click",function(){
            fnreiniciar();
        });
}

// REINICIA EL JUEGO, COLOCA EL MENSAJE DE REINICIO Y COLOCA EL 
// CURSOR EN EL CAMPO DE NÚMERO DIGITADO 
function fnreiniciar (){
    //window.location.reload();  
    if (parseInt(arrNumeroSecreto.length) == parseInt(nuMaximoSecreto)){
        arrNumeroSecreto.length = 0;
    }
    numeroSecreto = fngeneraNumeroSecreto();
    nuIntentos = 3;  // Volvemos a colocar en 3 el número de intentos  
    fnAsignarTexto("#idpMensajes","LISTO JUEGO REINICIADO ... "); 
    fnlimpiarValorDigitado();
    // Se deshabilita el botón de nuevo juego porque se ha reiniciado 
    // ya el juego 
    fnOnOffNuevoJuego('disable');
    foco();
}

// COLOCA TEXTO EN PANTALLA 
fnAsignarTexto("#id1_h1","Adivinar el Número Secreto..");
fnAsignarTexto("#id1_p",`Indique un número del 1 al ${nuMaximoSecreto} ..`);
