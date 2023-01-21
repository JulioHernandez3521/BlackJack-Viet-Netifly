import { acumularPuntos } from "./acumula-puntos";
import { crearCarta } from "./crear-carta";
import { determinaGanador } from "./ganador";
import { pedirCarta } from "./pedir-carta";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeList} puntosHTML 
 * @param {Array<String>} deck 
 * @param {NodeList} divCartasJugadores 
 */
  //Turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosJugadores, puntosHTML, deck, divCartasJugadores ) => {
    //LLamar a pedir uyna carta
    let puntosComputadora = 0 ;
    do {
        const carta = pedirCarta(deck);
        const turno = puntosJugadores.length-1;
        puntosComputadora = acumularPuntos(carta, turno, puntosJugadores, puntosHTML);
        crearCarta(carta, turno, divCartasJugadores);
        // puntosComputadora = puntosComputadora + valorCarta(carta);
        // puntosHTML[1].innerText = puntosComputadora;

        //Crear la carta
        // const nuevaCarta = document.createElement('img');
        // nuevaCarta.src = `./cartas/${carta}.png`;
        // nuevaCarta.classList.add('carta')
        // computadoraCartas.append(nuevaCarta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    determinaGanador( puntosJugadores );
   
}