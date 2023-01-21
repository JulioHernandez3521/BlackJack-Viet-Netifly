//Turno:  0 = Primer jugador y el ultimo es la computadora

import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 * @returns {Number}
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) =>{

    if(!carta) throw new Error('La carta es un parametro obligatorio');
    // if(!!turno) throw new Error('El turno es un parametro obligatorio');
    if(!puntosJugadores) throw new Error('puntosJugadores es un parametro obligatorio');
    if(!puntosHTML) throw new Error('puntosHTML es un parametro obligatorio');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];

}