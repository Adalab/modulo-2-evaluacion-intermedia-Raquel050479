//constantes que necesito
//funciones
//eventos

const selectElement = document.querySelector('.js-select');
const btnElement = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');
const optionUser = document.querySelector('.js-optionUser');
const optionCompu = document.querySelector('.js-optionCompu');
let count = 0;
let countUser = 0;
let countCompu = 0;
//const btnReset = document.querySelector('.js-btnReset');

//función num aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//función para recoger la elección de la usuaria
function getSelectElement() {
  return selectElement.value;
}

//función para generar num aleatorio
function getComputerRandomNum() {
  const randomNumber = getRandomNumber(10);
  console.log(`El número de la compu es: ${randomNumber}`);
  //condicional para saber qué saca la compu
  if (randomNumber <= 3) {
    return 'piedra';
  } else if (randomNumber >= 7) {
    return 'papel';
  } else {
    return 'tijera';
  }
}

//comparar opción usuaria con opción compu y pintar si ha ganado, empatado o perdido
//PIEDRA GANA A TIJERA
//PAPEL GANA A PIEDRA
//TIJERA GANA A PAPEL

function finalResult(optionUser, optionCompu) {
  if (optionUser === optionCompu) {
    //pinta en pantalla el resultado de cada jugada
    result.innerHTML = 'Habéis empatado';
  } else if (
    (optionUser === 'piedra' && optionCompu === 'tijera') ||
    (optionUser === 'papel' && optionCompu === 'piedra') ||
    (optionUser === 'tijera' && optionCompu === 'papel')
  ) {
    result.innerHTML = '¡Enhorabuena, has ganado!';
  } else {
    result.innerHTML = 'Has perdido';
  }
}

//función manejadora que llama a todas las funciones necesarias
function handleClick(event) {
  event.preventDefault();

  const optionUser = getSelectElement();
  const optionCompu = getComputerRandomNum();
  console.log(`Has elegido ${optionUser}`);
  console.log(`La compu ha elegido ${optionCompu}`);
  finalResult(optionUser, optionCompu);
  console.log(result);
}

//evento click
btnElement.addEventListener('click', handleClick);
