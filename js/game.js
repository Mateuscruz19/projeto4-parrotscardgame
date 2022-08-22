


boasvindas()
// Numero escolhido pelo usuario	
let = numero;
jogadas = 0;

// função escolher quantidade cartas
function boasvindas() {
numero = parseInt(prompt('Bem vindo ao Parrot Card Game,digite um numero par entre 4 e 14.'));
  if(numero !== 4 && numero !== 6 && numero !== 8 && numero !== 10 && numero !== 12 && numero !== 14){
  alert('Numero invalido, tente novamente,número par entre 4 e 14.')
  numero = 0;
  boasvindas();4
} else(numero === 4 && numero === 6 && numero === 8 && numero === 10 && numero === 12 && numero === 14)
}
 

// CREDITOS AONDE ENCONTREI A FUNÇÃO DE DIMINUIR O VOLUME: https://stackoverflow.com/questions/20390421/lower-background-music-volume-when-autoplay-html
function setHalfVolume() {
  var myAudio = document.getElementById("audio1");  
  myAudio.volume = 0.1; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
// 
const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');


//ARRAY DOS PASSAROS
const papagaios = [
  'papagaios1',
   'papagaios2',
    'papagaios3',
     'papagaios4',
      'papagaios5',   
       'papagaios6',      
        'papagaios7',
      ];

      

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.acertou');

  if (disabledCards.length === 14) {
    clearInterval(this.loop);
    alert(`Parabéns,seu tempo foi: ${timer.innerHTML} segundos,e você ganhou em ${jogadas} jogadas`);
    jogar = prompt('Deseja jogar novamente?');
  }
  if(jogar === 'sim'){
    window.location.reload();
  }else if(jogar === 'não'){
    alert('Obrigado por jogar,volte sempre!')
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');
  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('acertou');
    secondCard.firstChild.classList.add('acertou');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('virada');
      secondCard.classList.remove('virada');

      firstCard = '';
      secondCard = '';

    }, 700);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('virada')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('virada');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('virada');
    secondCard = target.parentNode;
    jogadas = jogadas + 1;
    checkCards();
    
  }  
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../cartas/${character}.gif')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicado = [ ...papagaios, ...papagaios ];

  const shuffledArray = duplicado.sort(() => Math.random() - 0.5);


  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  startTimer();
  loadGame();
}
