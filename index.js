//desafio 4
// adivinar un número aleatorio del 0 al 10
// si adivina felicitas
// sino das 2 oportunidades más
// al final debe mostrarse cuál era el número correcto
// al finalizar podemos usar un numero random 



function jugarAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 10); // número random
    console.log(numeroSecreto);

    let intentos = 0; // Intentos inicia en 0 y no debe pasar de 3.
    let acierto = false; // Inicializo el acierto con false   
    let reduciendoConteo = 3; // mostrar disminución del conteo al usuario solo 2 intentos más.
    let palabraS="";
    while (!acierto && intentos < 3) {
        const obtenerNumeroUsuario = parseInt(prompt('¿Adivina el número secreto?'));// obtengo el número del usuario.

        if (numeroSecreto === obtenerNumeroUsuario) { // si acierto
            acierto = true;
            alert(` \u{1F389} Felicidades, adivinaste el número secreto. El número secreto es: ${numeroSecreto}`);

        } else { // sino acierto, tengo 2 intentos más            

            intentos++; 
            reduciendoConteo--;

            palabraS=reduciendoConteo === 1 ? 'intento' : 'intentos'; //  singular y plural  

            if (intentos < 3) {
                
                alert(`\u{1F622}  ¡Oh no!, ese no es el número secreto. Intenta de nuevo. Te quedan Solo tienes ${reduciendoConteo} ${palabraS} más.`);
            
            }
              
        }
    }

    if (!acierto) {
        alert(`\u{274C} Fallaste, no adivinaste el número secreto. El número secreto era: ${numeroSecreto}`);
    }

    if (confirm("¿Quieres jugar de nuevo?")) {
        jugarAdivinanza(); // Reiniciar el juego
    }
}

// Iniciar el juego
jugarAdivinanza();












