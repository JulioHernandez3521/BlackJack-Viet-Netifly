import _ from 'underscore';
import {pedirCarta, crearDeck, crearCarta, acumularPuntos, turnoComputadora} from './usecases';

const miModulo = (()=>{
  'use strict'

  /**
   * 2C = Two of Clubs
   * 2D = Two of Diamonds
   * 2H = Two of Hearts
   * 2S = Two of Spades
   */

  let deck       = [];
  const tipos      = ['C','D','H','S'];
  const especiales = ['A','J','Q','K'];
  let puntosJugador = 0;
  //     puntosComputadora = 0;

  let puntosJugadores = [];
  //Referencias HTML
  const btnNuevo   = document.querySelector('#btnNuevo'),
        btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

  // const jugadorCartas = document.querySelector('#jugador-cartas'),
  //       computadoraCartas = document.querySelector('#computadora-cartas'),
  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

  const inicializarJuego = (numJugadores = 2 )=> {
      deck = crearDeck(tipos, especiales);
      
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }
      puntosHTML.forEach(ele => ele.innerText = 0);
      divCartasJugadores.forEach(ele => ele.innerHTML ='');

      btnPedir.disabled = false;
      btnDetener.disabled = false;


  }




  // console.log(valorCarta('AD'));

  //Eventos
  btnPedir.addEventListener('click', () =>{
      //LLamar a pedir uyna carta
      const carta = pedirCarta(deck);
      puntosJugador = acumularPuntos(carta,0,puntosJugadores, puntosHTML);
      //Crear la carta
     crearCarta(carta, 0, divCartasJugadores);

      //Validar los puntos
      if( puntosJugador > 21){
          console.warn('Lo siento perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, puntosJugadores, puntosHTML, deck, divCartasJugadores );
      }else if( puntosJugador === 21){
          console.warn('21, Genial!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(  puntosJugador, puntosJugadores, puntosHTML, deck, divCartasJugadores );
      }



      // console.log(puntosJugador)
  });
  btnDetener.addEventListener('click', () =>{
      btnPedir.disabled   = true;
      btnDetener.disabled = true;

      turnoComputadora(  puntosJugador, puntosJugadores, puntosHTML, deck, divCartasJugadores );
  });
  btnNuevo.addEventListener('click', () =>{
      inicializarJuego();
  });


  return {
      nuevoJuego: inicializarJuego
  }
})();

