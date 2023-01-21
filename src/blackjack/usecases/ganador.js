/**
 * 
 * @param {Array<Number} puntosJugadores 
 */ 
export const determinaGanador = ( puntosJugadores )=>{
    //TODO: Hacer un ciclo para el if
    const [puntosMinimos, puntosComputadora]  = puntosJugadores;
    
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
