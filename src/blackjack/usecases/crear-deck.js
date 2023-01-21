import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCartas Ejemplo ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns  {Array<string>} regresa un unevo deck de cartas
 */

//Funcion para crear las cartas aleatorias
export const crearDeck = (tiposDeCartas, tiposEspeciales)=>{

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('Tipos de carta es obligatorio como un arreglo de strings');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos de carta especiales es obligatorio como un arreglo de strings');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCartas) {
            deck.push( i + tipo);
        }
    }
    
    for (const tipo of tiposDeCartas) {
        for(let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}


