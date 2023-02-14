function init(){
    
    var boton1 = document.getElementById('boton1');
    var inputTurno = document.getElementById('InputTurno');

    boton1.onclick = function(e){

        if(boton1.value == '_'){
            if(inputTurno.value == "Jugador 1"){
                boton1.value = 'O';
                inputTurno.value = "Jugador 2";
            }else{
                boton1.value = 'X';
                inputTurno.value = "Jugador 1";
            }  
        }
        /*Condicional para validar que si el valor de el botón 1 y botón 2 y botón 3 es X entonces gana el jugador 2 */
        if (boton1.value =="X" && boton2.value == "X" && boton3.value == "X" ) {
          boton1.style.backgroundColor= ' #badc58';
          boton2.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 1 y botón 2 y botón 3 es O entonces gana el jugador 1 */
       }else if (boton1.value =="O" && boton2.value == "O" && boton3.value == "O" ) {
          boton1.style.backgroundColor= ' #fff444';
          boton2.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 1 y botón 4 y botón 7 es X entonces gana el jugador 2 */
       }else if (boton1.value =="X" && boton4.value == "X" && boton7.value == "X" ) {
          boton1.style.backgroundColor= ' #badc58';
          boton4.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 1 y botón 4 y botón 7 es O entonces gana el jugador 1 */
       }else if (boton1.value =="O" && boton4.value == "O" && boton7.value == "O" ) {
          boton1.style.backgroundColor= ' #fff444';
          boton4.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 1 y botón 5 y botón 9 es X entonces gana el jugador 2 */
       }else if (boton1.value =="X" && boton5.value == "X" && boton9.value == "X" ) {
          boton1.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 1 y botón 5 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton1.value =="O" && boton5.value == "O" && boton9.value == "O" ) {
          boton1.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
   }  

   boton2.onclick = function(e){

    if(boton2.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton2.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton2.value = 'X';
            inputTurno.value = "Jugador 1";
        }

    }
    /*Condicional para validar que si el valor de el botón 2 y botón 1 y botón 3 es X entonces gana el jugador 2 */
        if (boton2.value =="X" && boton1.value == "X" && boton3.value == "X" ) {
          boton2.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 2 y botón 1 y botón 3 es O entonces gana el jugador 1 */
       }else if (boton2.value =="O" && boton1.value == "O" && boton3.value == "O" ) {
          boton2.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 2 y botón 5 y botón 8 es X entonces gana el jugador 2 */
       }else if (boton2.value =="X" && boton5.value == "X" && boton8.value == "X" ) {
          boton2.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton8.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 2 y botón 5 y botón 8 es O entonces gana el jugador 1 */
       }else if (boton2.value =="O" && boton5.value == "O" && boton8.value == "O" ) {
          boton2.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton8.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }

}

boton3.onclick = function(e){

    if(boton3.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton3.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton3.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
    /*Condicional para validar que si el valor de el botón 3 y botón 2 y botón 1 es X entonces gana el jugador 2 */
        if (boton3.value =="X" && boton2.value == "X" && boton1.value == "X" ) {
          boton3.style.backgroundColor= ' #badc58';
          boton2.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 3 y botón 2 y botón 1 es O entonces gana el jugador 1 */
       }else if (boton3.value =="O" && boton2.value == "O" && boton1.value == "O" ) {
          boton3.style.backgroundColor= ' #fff444';
          boton2.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 3 y botón 6 y botón 9 es X entonces gana el jugador 2 */
       }else if (boton3.value =="X" && boton6.value == "X" && boton9.value == "X" ) {
          boton3.style.backgroundColor= ' #badc58';
          boton6.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 3 y botón 6 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton3.value =="O" && boton6.value == "O" && boton9.value == "O" ) {
          boton3.style.backgroundColor= ' #fff444';
          boton6.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 3 y botón 5 y botón 7 es X entonces gana el jugador 2 */
       }else if (boton3.value =="X" && boton5.value == "X" && boton7.value == "X" ) {
          boton3.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 3 y botón 5 y botón 7 es O entonces gana el jugador 1 */
       }else if (boton3.value =="O" && boton5.value == "O" && boton7.value == "O" ) {
          boton3.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
}

boton4.onclick = function(e){

    if(boton4.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton4.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton4.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
        /*Condicional para validar que si el valor de el botón 4 y botón 1 y botón 7 es X entonces gana el jugador 2 */
        if (boton4.value =="X" && boton1.value == "X" && boton7.value == "X" ) {
          boton4.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 4 y botón 1 y botón 7 es O entonces gana el jugador 1 */
       }else if (boton4.value =="O" && boton1.value == "O" && boton7.value == "O" ) {
          boton4.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 4 y botón 5 y botón 6 es X entonces gana el jugador 2 */
       }else if (boton4.value =="X" && boton5.value == "X" && boton6.value == "X" ) {
          boton4.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton6.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 4 y botón 5 y botón 6 es O entonces gana el jugador 1 */
       }else if (boton4.value =="O" && boton5.value == "O" && boton6.value == "O" ) {
          boton4.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton6.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
}

boton5.onclick = function(e){

    if(boton5.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton5.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton5.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
    /*Condicional para validar que si el valor de el botón 5 y botón 4 y botón 6 es X entonces gana el jugador 2 */
        if (boton5.value =="X" && boton4.value == "X" && boton6.value == "X" ) {
          boton5.style.backgroundColor= ' #badc58';
          boton4.style.backgroundColor= ' #badc58';
          boton6.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 5 y botón 4 y botón 6 es O entonces gana el jugador 1 */
       }else if (boton5.value =="O" && boton4.value == "O" && boton6.value == "O" ) {
          boton5.style.backgroundColor= ' #fff444';
          boton4.style.backgroundColor= ' #fff444';
          boton6.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 5 y botón 2 y botón 8 es X entonces gana el jugador 2 */
       }else if (boton5.value =="X" && boton2.value == "X" && boton8.value == "X" ) {
          boton5.style.backgroundColor= ' #badc58';
          boton2.style.backgroundColor= ' #badc58';
          boton8.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 5 y botón 2 y botón 8 es O entonces gana el jugador 1 */
       }else if (boton5.value =="O" && boton2.value == "O" && boton8.value == "O" ) {
          boton5.style.backgroundColor= ' #fff444';
          boton2.style.backgroundColor= ' #fff444';
          boton8.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 5 y botón 1 y botón 9 es X entonces gana el jugador 2 */
       }else if (boton5.value =="X" && boton1.value == "X" && boton9.value == "X" ) {
          boton5.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 5 y botón 1 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton5.value =="O" && boton1.value == "O" && boton9.value == "O" ) {
          boton5.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 5 y botón 3 y botón 7 es X entonces gana el jugador 2 */
       }else if (boton5.value =="X" && boton3.value == "X" && boton7.value == "X" ) {
          boton5.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 5 y botón 3 y botón 7 es O entonces gana el jugador 1 */
       }else if (boton5.value =="O" && boton3.value == "O" && boton7.value == "O" ) {
          boton5.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }

}

boton6.onclick = function(e){

    if(boton6.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton6.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton6.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
    /*Condicional para validar que si el valor de el botón 6 y botón 3 y botón 9 es X entonces gana el jugador 2 */
        if (boton6.value =="X" && boton3.value == "X" && boton9.value == "X" ) {
          boton6.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 6 y botón 3 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton6.value =="O" && boton3.value == "O" && boton9.value == "O" ) {
          boton6.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 6 y botón 5 y botón 4 es X entonces gana el jugador 2 */
       }else if (boton6.value =="X" && boton5.value == "X" && boton4.value == "X" ) {
          boton6.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton4.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 6 y botón 5 y botón 4 es O entonces gana el jugador 1 */
       }else if (boton6.value =="O" && boton5.value == "O" && boton4.value == "O" ) {
          boton6.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton4.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
}

boton7.onclick = function(e){

    if(boton7.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton7.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton7.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
    /*Condicional para validar que si el valor de el botón 7 y botón 8 y botón 9 es X entonces gana el jugador 2 */
        if (boton7.value =="X" && boton8.value == "X" && boton9.value == "X" ) {
          boton7.style.backgroundColor= ' #badc58';
          boton8.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 7 y botón 8 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton7.value =="O" && boton8.value == "O" && boton9.value == "O" ) {
          boton7.style.backgroundColor= ' #fff444';
          boton8.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 7 y botón 4 y botón 1 es X entonces gana el jugador 2 */
       }else if (boton7.value =="X" && boton4.value == "X" && boton1.value == "X" ) {
          boton7.style.backgroundColor= ' #badc58';
          boton4.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 7 y botón 4 y botón 1 es O entonces gana el jugador 1 */
       }else if (boton7.value =="O" && boton4.value == "O" && boton1.value == "O" ) {
          boton7.style.backgroundColor= ' #fff444';
          boton4.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 7 y botón 5 y botón 3 es X entonces gana el jugador 2 */
       }else if (boton7.value =="X" && boton5.value == "X" && boton3.value == "X" ) {
          boton7.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 7 y botón 5 y botón 3 es O entonces gana el jugador 1 */
       }else if (boton7.value =="O" && boton5.value == "O" && boton3.value == "O" ) {
          boton7.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
}

boton8.onclick = function(e){

    if(boton8.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton8.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton8.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
     /*Condicional para validar que si el valor de el botón 8 y botón 7 y botón 9 es X entonces gana el jugador 2 */
        if (boton8.value =="X" && boton7.value == "X" && boton9.value == "X" ) {
          boton8.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
          boton9.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 8 y botón 7 y botón 9 es O entonces gana el jugador 1 */
       }else if (boton8.value =="O" && boton7.value == "O" && boton9.value == "O" ) {
          boton8.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
          boton9.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 8 y botón 5 y botón 2 es X entonces gana el jugador 2 */
       }else if (boton8.value =="X" && boton5.value == "X" && boton2.value == "X" ) {
          boton8.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton2.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 8 y botón 5 y botón 2 es O entonces gana el jugador 1 */
       }else if (boton8.value =="O" && boton5.value == "O" && boton2.value == "O" ) {
          boton8.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton2.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
}

boton9.onclick = function(e){

    if(boton9.value == '_'){
        if(inputTurno.value == "Jugador 1"){
            boton9.value = 'O';
            inputTurno.value = "Jugador 2";
        }else{
            boton9.value = 'X';
            inputTurno.value = "Jugador 1";
        }
    }
        /*Condicional para validar que si el valor de el botón 9 y botón 8 y botón 7 es X entonces gana el jugador 2 */
        if (boton9.value =="X" && boton8.value == "X" && boton7.value == "X" ) {
          boton9.style.backgroundColor= ' #badc58';
          boton8.style.backgroundColor= ' #badc58';
          boton7.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 9 y botón 8 y botón 7 es O entonces gana el jugador 1 */
       }else if (boton9.value =="O" && boton8.value == "O" && boton7.value == "O" ) {
          boton9.style.backgroundColor= ' #fff444';
          boton8.style.backgroundColor= ' #fff444';
          boton7.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 9 y botón 6 y botón 3 es X entonces gana el jugador 2 */
       }else if (boton9.value =="X" && boton6.value == "X" && boton3.value == "X" ) {
          boton9.style.backgroundColor= ' #badc58';
          boton6.style.backgroundColor= ' #badc58';
          boton3.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 9 y botón 6 y botón 3 es O entonces gana el jugador 1 */
       }else if (boton9.value =="O" && boton6.value == "O" && boton3.value == "O" ) {
          boton9.style.backgroundColor= ' #fff444';
          boton6.style.backgroundColor= ' #fff444';
          boton3.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
           /*--------------------------------------------------------------------------------------------------*/
        /*Condicional para validar que si el valor de el botón 9 y botón 5 y botón 1 es X entonces gana el jugador 2 */
       }else if (boton9.value =="X" && boton5.value == "X" && boton1.value == "X" ) {
          boton9.style.backgroundColor= ' #badc58';
          boton5.style.backgroundColor= ' #badc58';
          boton1.style.backgroundColor= ' #badc58';
           alert('Felicitaciones GANASTE: Jugador 2');
           setTimeout('location.reload()',1000);
        /*Condicional para validar que si el valor de el botón 9 y botón 5 y botón 1 es O entonces gana el jugador 1 */
       }else if (boton9.value =="O" && boton5.value == "O" && boton1.value == "O" ) {
          boton9.style.backgroundColor= ' #fff444';
          boton5.style.backgroundColor= ' #fff444';
          boton1.style.backgroundColor= ' #fff444';
           alert('Felicitaciones GANASTE: Jugador 1');
           setTimeout('location.reload()',1000);
       }
 
    }


}


  

