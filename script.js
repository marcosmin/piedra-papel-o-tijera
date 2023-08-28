document.addEventListener("DOMContentLoaded", () => {


    // DECLARACION DE VARIABLES

    let nombreUsuario; // nombre de usuario
    let jugadaU; // jugada del usuario
    let jugadaM; // jugada de la máquina
    let result; // resultado del juego
    let contadorRound = 1; // almacena numero de rounds
    let puntosUsuarioActualizados = 0; // puntos del usuario
    let puntosMaquinaActualizados = 0; // puntos de la maquina




    // SELECCION DE ELEMENTOS HTML

    const avatarUsuario = document.querySelector(".avatar-usuario");
    const avatarMaquina = document.querySelector(".avatar-maquina");

    const botonJugar = document.querySelector(".boton-jugar");
    const areasDeJuego = document.querySelectorAll(".areaDeJuego");
    const display = document.querySelector(".display");
    const botonReiniciar = document.querySelector(".reiniciar");
    const botonSalir = document.querySelector(".salir");
    const comentarioElije = document.querySelector(".comentario p");

    const jugadaUsuarioImg = document.querySelector(".jugada-usuario-imagen");
    const jugadaUsuario = document.querySelector(".jugada-usuario-texto");
    const jugadaMaquinaImg = document.querySelector(".jugada-maquina-imagen");
    const jugadaMaquinaTex = document.querySelector(".jugada-maquina-texto");

    const round = document.querySelector(".round");
    const marcadorRound = document.querySelector(".marcador-round");
    const puntosUsuario = document.querySelector(".puntos-usuario");
    const puntosMaquina = document.querySelector(".puntos-maquina");
    const trofeo = document.querySelector(".trofeo img");
    const gameOver = document.querySelector(".game-over img");

    const usuario = document.querySelector(".usuario");
    const maquina = document.querySelector(".maquina");
    const barraVerdeUsuario = document.querySelector(".barra-verde");
    const barraRojaUsuario = document.querySelector(".barra-roja");
    const barraVerdeMaquina = document.querySelector(".barra-verde-maquina");
    const barraRojaMaquina = document.querySelector(".barra-roja-maquina");

    const datosCentrales = document.querySelector(".datos");
    const botonPiedra = document.querySelector(".piedra-usuario");
    const botonPapel = document.querySelector(".papel-usuario");
    const botonTijera = document.querySelector(".tijera-usuario");

    const clickPlay = document.querySelector(".click_play");
    const errorPlay = document.querySelector(".error_play");
    const eleccionPlay = document.querySelector(".eleccion_play");
    const victoriaParcial = document.querySelector(".victoria_parcial");
    const victoriaFinal = document.querySelector(".victoria_final");
    const derrotaParcial = document.querySelector(".derrota_parcial");
    const derrotaFinal = document.querySelector(".derrota_final");
    const beepHover = document.querySelector(".beep_hover");


    //--- FUNCION PARA REGISTRAR Y VALIDAR USUARIO ------------------------

    function procesarNombreUsuario() {
        
        // Obtener el nombre de usuario del input
        const inputNombre = document.querySelector(".input-nombre-usuario");
        nombreUsuario = inputNombre.value.trim().toUpperCase();
        const nombreUsuarioBarra = document.querySelector(".nombre-usuario");
    
        // Validar nombre de usuario
        if (nombreUsuario === "") {
            errorPlay.play();
            // Mostrar mensaje de error si el nombre está vacío
            display.innerHTML = "Ingresa tu nombre";
            display.style.visibility = "visible";
            nombreUsuarioBarra.innerHTML = "ESPERANDO NOMBRE . .";
        } else {
            clickPlay.play();
            // Ocultar elementos relacionados con el nombre y el registro
            nombreUsuarioBarra.innerHTML = nombreUsuario;
            display.textContent = "";
            display.style.visibility = "hidden";
            botonJugar.style.visibility = "hidden";
            inputNombre.style.visibility = "hidden";
    
            // Mostrar areas de juego
            areasDeJuego.forEach(function(areaDeJuego) {
                areaDeJuego.style.visibility = 'visible';
            });
            // Mostrar area de ataque
            comentarioElije.style.visibility = "visible";
            botonPiedra.style.visibility = "visible";
            botonPapel.style.visibility = "visible";
            botonTijera.style.visibility = "visible";
        }

    }
    



    //--- EVENTO CLICK Y "ENTER" PARA EL BOTON JUGAR ------------------

    botonJugar.addEventListener("click", procesarNombreUsuario);
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            procesarNombreUsuario();
        }
    });




    //--- JUGADA USUARIO ------------------------------------
        
    botonPiedra.addEventListener("click", () => {
        eleccionPlay.play();
        jugadaUsuarioImg.style.visibility = "visible";
        jugadaUsuarioImg.src = "./imagenes/piedra-usuario.png";
        jugadaUsuario.style.visibility = "visible";
        jugadaUsuario.textContent = "PIEDRA";
        jugadaU = "PIEDRA";
        obtenerJugadaMaquina();
        jugar();
    });

    botonPapel.addEventListener("click", () => {
        eleccionPlay.play();
        jugadaUsuarioImg.style.visibility = "visible";
        jugadaUsuarioImg.src = "./imagenes/papel-usuario.png";
        jugadaUsuario.style.visibility = "visible";
        jugadaUsuario.textContent = "PAPEL";
        jugadaU = "PAPEL";
        obtenerJugadaMaquina();
        jugar();
    });

    botonTijera.addEventListener("click", () => {
        eleccionPlay.play();
        jugadaUsuarioImg.style.visibility = "visible";
        jugadaUsuarioImg.src = "./imagenes/tijera-usuario.png";
        jugadaUsuario.style.visibility = "visible";
        jugadaUsuario.textContent = "TIJERA";
        jugadaU = "TIJERA";
        obtenerJugadaMaquina();
        jugar();
    });




   




    //--- FUNCION JUGADA MAQUINA --------------------------------
    
    function obtenerJugadaMaquina() {

        // Generar una jugada aleatoria de la máquina
        const opciones = ["PIEDRA", "PAPEL", "TIJERA"];
        const jugadaRandom = Math.floor(Math.random() * opciones.length);
        jugadaM = opciones[jugadaRandom];

        // Mostrar la jugada en la interfaz
        if (jugadaM === "PIEDRA") {
            jugadaMaquinaImg.style.visibility = "visible";
            jugadaMaquinaImg.src = "./imagenes/piedra-maquina.png";
            jugadaMaquinaTex.style.visibility = "visible";
            jugadaMaquinaTex.textContent = "PIEDRA";
        } else if (jugadaM === "PAPEL") {
            jugadaMaquinaImg.style.visibility = "visible";
            jugadaMaquinaImg.src = "./imagenes/papel-maquina.png";
            jugadaMaquinaTex.style.visibility = "visible";
            jugadaMaquinaTex.textContent = "PAPEL";
        } else {
            jugadaMaquinaImg.style.visibility = "visible";
            jugadaMaquinaImg.src = "./imagenes/tijera-maquina.png";
            jugadaMaquinaTex.style.visibility = "visible";
            jugadaMaquinaTex.textContent = "TIJERA";
        }
        
        return jugadaM;
    }


    



    
    

    //--- FUNCION ACTUALIZAR PUNTOS --------------------------------

    function actualizarPuntos(jU, jM) {

        // Actualizar los puntos según las jugadas
        if(jM === jU) {
            result = `EMPATE`;
        } else if (
            (jM === "PIEDRA" && jU === "TIJERA") ||
            (jM === "PAPEL" && jU === "PIEDRA") ||
            (jM === "TIJERA" && jU === "PAPEL")
        ) {
            derrotaParcial.currentTime = 0;
            derrotaParcial.play();
            puntosMaquinaActualizados += 1;
            result = `PUNTO DE LA MAQUINA`;
            contadorRound += 1;
        } else {
            victoriaParcial.currentTime = 0;
            victoriaParcial.play();
            puntosUsuarioActualizados += 1;
            result = `PUNTO DE ${nombreUsuario}`;
            contadorRound += 1;
        }


        // Mostrar el resultado en la interfaz
        puntosUsuario.textContent = puntosUsuarioActualizados;
        puntosMaquina.textContent = puntosMaquinaActualizados;
        display.style.visibility = "visible";
        display.textContent = result;
        


        if (puntosMaquinaActualizados === 3) {

            // Ocultar area de ataque
            comentarioElije.style.visibility = "hidden";
            botonPiedra.style.visibility = "hidden";
            botonPapel.style.visibility = "hidden";
            botonTijera.style.visibility = "hidden";

            // Esperar 2 seg. y anunciar que la maquina gana el juego
            setTimeout(() => {
                derrotaFinal.play();
                display.textContent = 'LA MAQUINA GANA EL JUEGO';
                comentarioElije.style.visibility = "hidden";
                botonPiedra.style.visibility = "hidden";
                botonPapel.style.visibility = "hidden";
                botonTijera.style.visibility = "hidden";

                jugadaUsuarioImg.style.visibility = "hidden";
                jugadaUsuario.style.visibility = "hidden";
                jugadaMaquinaImg.style.visibility = "hidden";
                jugadaMaquinaTex.style.visibility = "hidden";
                gameOver.style.display = "inline-block";
            }, 2000);

        } else if (puntosUsuarioActualizados === 3) {

            // Ocultar area de ataque
            comentarioElije.style.visibility = "hidden";
            botonPiedra.style.visibility = "hidden";
            botonPapel.style.visibility = "hidden";
            botonTijera.style.visibility = "hidden";

            // Esperar 2 seg. y anunciar que el usuario gana el juego
            setTimeout(() => {
                victoriaFinal.play();
                display.textContent = `FELICITACIONES ${nombreUsuario} GANASTE EL JUEGO!!!`;
                comentarioElije.style.visibility = "hidden";
                botonPiedra.style.visibility = "hidden";
                botonPapel.style.visibility = "hidden";
                botonTijera.style.visibility = "hidden";

                jugadaUsuarioImg.style.visibility = "hidden";
                jugadaUsuario.style.visibility = "hidden";
                jugadaMaquinaImg.style.visibility = "hidden";
                jugadaMaquinaTex.style.visibility = "hidden";
                trofeo.style.display = "inline-block";
            }, 2000);

        } else {
            
        }
        
    }

   



    
    //--- FUNCION BARRAS DE VIDA --------------------------------

    function barrasVida() {

        // Limpia las clases anteriores antes de añadir nuevas clases
        barraVerdeUsuario.classList.remove("verdeUsuario0", "verdeUsuario1", "verdeUsuario2", "verdeUsuario3");
        barraRojaUsuario.classList.remove("rojoUsuario0", "rojoUsuario1", "rojoUsuario2", "rojoUsuario3");
        barraVerdeMaquina.classList.remove("verdeMaquina0", "verdeMaquina1", "verdeMaquina2", "verdeMaquina3");
        barraRojaMaquina.classList.remove("rojoMaquina0", "rojoMaquina1", "rojoMaquina2", "rojoMaquina3");

        // Actualiza las clases de la barra de vida del USUARIO según los puntos de la MAQUINA
        if (puntosMaquinaActualizados === 0) {
            barraVerdeUsuario.classList.add("verdeUsuario0");
            barraRojaUsuario.classList.add("rojoUsuario0");
        } else if (puntosMaquinaActualizados === 1) {
            barraVerdeUsuario.classList.add("verdeUsuario1");
            barraRojaUsuario.classList.add("rojoUsuario1");
        } else if (puntosMaquinaActualizados === 2) {
            barraRojaUsuario.classList.add("rojoUsuario2");
            barraVerdeUsuario.classList.add("verdeUsuario2");
        } else if (puntosMaquinaActualizados === 3) {
            barraRojaUsuario.classList.add("rojoUsuario3");
            barraVerdeUsuario.classList.add("verdeUsuario3");
        } else {

        }

        // Actualiza las clases de la barra de vida de la MAQUINA según los puntos del USUARIO
        if (puntosUsuarioActualizados === 0) {
            barraVerdeMaquina.classList.add("verdeMaquina0");
            barraRojaMaquina.classList.add("rojoMaquina0");
        } else if (puntosUsuarioActualizados === 1) {
            barraVerdeMaquina.classList.add("verdeMaquina1");
            barraRojaMaquina.classList.add("rojoMaquina1");
        } else if (puntosUsuarioActualizados === 2) {
            barraVerdeMaquina.classList.add("verdeMaquina2");
            barraRojaMaquina.classList.add("rojoMaquina2");
        } else if (puntosUsuarioActualizados === 3) {
            barraVerdeMaquina.classList.add("verdeMaquina3");
            barraRojaMaquina.classList.add("rojoMaquina3");
        } else {

        }

    }
        
   




    // FUNCION RONDA DE JUEGO

    function jugar() {

        // Actualizar Nº de Round
        round.textContent = `ROUND ${contadorRound}`;
        // Actualiza los puntos y el resultado
        actualizarPuntos(jugadaU, jugadaM);
        // Actualizar barra de vida
        barrasVida();
    }






    // FUNCION PARA REINICIAR EL JUEGO

    function reiniciarJuego() {
        clickPlay.play();
        // Reiniciar valores y elementos para comenzar un nuevo juego

        // Ocultar area de ataque hasta nuevo registro
        comentarioElije.style.visibility = "hidden";
        botonPiedra.style.visibility = "hidden";
        botonPapel.style.visibility = "hidden";
        botonTijera.style.visibility = "hidden";
        trofeo.style.display = "none";
        gameOver.style.display = "none";

        puntosUsuarioActualizados = 0;
        puntosMaquinaActualizados = 0;
        contadorRound = 1;

        puntosUsuario.textContent = 0;
        puntosMaquina.textContent = 0;
        round.textContent = `ROUND ${contadorRound}`;

        // Oculta las jugadas y resultados anteriores
        jugadaUsuarioImg.style.visibility = "hidden";
        jugadaUsuario.style.visibility = "hidden";
        jugadaMaquinaImg.style.visibility = "hidden";
        jugadaMaquinaTex.style.visibility = "hidden";
        display.style.visibility = "hidden";

        // Reinicia las clases de las barras de vida
        barraVerdeUsuario.className = "barra-verde";
        barraRojaUsuario.className = "barra-roja";
        barraVerdeMaquina.className = "barra-verde-maquina";
        barraRojaMaquina.className = "barra-roja-maquina";

        // Muestra el botón de jugar y el campo de nombre
        botonJugar.style.visibility = "visible";
        const inputNombre = document.querySelector(".input-nombre-usuario");
        inputNombre.style.visibility = "visible";
    }
        

    // Evento de clic para el botón de reinicio
    botonReiniciar.addEventListener("click", () => {
        reiniciarJuego();
    });







    // Sonido al hacer HOVER sobre los botónes

    botonReiniciar.addEventListener("mouseover", () => {
        beepHover.play();
    });

    botonSalir.addEventListener("mouseover", () => {
        beepHover.play();
    });

    botonJugar.addEventListener("mouseover", () => {
        beepHover.play();
    });

    





    //--- BOTON SALIR ------------------------------------

    botonSalir.addEventListener("click", () => {
        
        clickPlay.play();
        // Ocultar elementos html
        trofeo.style.display = "none";
        gameOver.style.display = "none";
        marcadorRound.style.visibility = "hidden";
        avatarUsuario.style.visibility = "hidden";
        avatarMaquina.style.visibility = "hidden";
        usuario.style.visibility = "hidden";
        maquina.style.visibility = "hidden";
        datosCentrales.style.visibility = "hidden";

        jugadaUsuarioImg.style.visibility = "hidden";
        jugadaUsuario.style.visibility = "hidden";
        jugadaMaquinaImg.style.visibility = "hidden";
        jugadaMaquinaTex.style.visibility = "hidden";

        comentarioElije.style.visibility = "hidden";
        botonReiniciar.style.visibility = "hidden";
        botonSalir.style.visibility = "hidden";
        botonPiedra.style.visibility = "hidden";
        botonPapel.style.visibility = "hidden";
        botonTijera.style.visibility = "hidden";

        // Saludo de despedida para el usuario
        display.textContent = `Nos vemos ${nombreUsuario} ojalá te hayas divertido!!!`;

        // Espera 4 seg y cierra el juego
        setTimeout(() => {
            window.close();
        }, 4000);
        
    });


});