 /**
 * funcion para tomar una carta 
 * @param {Array<string>} deck Ejemplo ['1C','2D','3H','4S']
 * @returns  {String} regresa una uneva carta
 */
export const pedirCarta = (deck)=>{
    if(!deck || deck.length === 0){
        throw 'Ya no hay cartas';
    }
    // // carta = deck[Math.floor(Math.random() * (deck.length -1))];
    // // const posicion = deck.indexOf(carta);
    // // deck.splice( posicion, 1);
    return  deck.pop();
}