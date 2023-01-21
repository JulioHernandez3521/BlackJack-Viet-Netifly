/**
 * Funcion para crear una carta
 * @param {String} carta 
 * @param {Number} turno 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    // console.log(turno)
    if(!carta) throw new Error('La carta es un parametro requerido');
    // if(!turno) throw new Error('El turno es un parametro requerido');
    if(!divCartasJugadores) throw new Error('El div es un parametro requerido');

    const nuevaCarta = document.createElement('img');
    nuevaCarta.src = `./assets/cartas/${carta}.png`;
    nuevaCarta.classList.add('carta')
    divCartasJugadores[turno].append(nuevaCarta);
}