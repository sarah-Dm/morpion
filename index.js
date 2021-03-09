const $boxes = document.querySelectorAll('.box');

//commencer le jeu au click sur "Play"
const $startButton = document.querySelector('button');
const $pop_up = document.querySelector('.pop_up');
const startGame = () => {
  $pop_up.classList.remove('pop_up');
  $pop_up.classList.add('remove');
};
$startButton.addEventListener('click', () => startGame());

//cocher alternativement avec une croix ou un rond
//1- fixer une variable qui compte le nbre de fois où on appelle la fonction
let fonctionCall = 0;
const checkBox = (i) => {
  //2- faire avancer le curseur à chaque fois que la fonction est appelée
  fonctionCall += 1;
  //3- lier le rond à nbre paire/ la croix à nbre impair
  if (fonctionCall % 2) {
    //créer des éléments DOM ❌
    const $cross = document.createElement('div');
    $cross.innerHTML = '❌';
    $boxes[i].appendChild($cross);
  } else {
    //créer des éléments DOM ⭕️
    const $circle = document.createElement('div');
    $circle.innerHTML = '⭕️';
    $boxes[i].appendChild($circle);
  }
  checkEndGame();
};

//lier le cochage au click sur les cases
$boxes.forEach((box, i) => {
  box.addEventListener('click', () => {
    checkBox(i);
  });
});

//si les div sont identiques en ligne/colonne/diagonale (contiennent croix ou rond) alors arreter le jeu
const checkEndGame = () => {
  if (
    $boxes[0].innerText &&
    $boxes[1].innerText &&
    $boxes[2].innerText &&
    $boxes[0].innerText === $boxes[1].innerText &&
    $boxes[1].innerText === $boxes[2].innerText
  ) {
    $boxes[0].classList.add('won');
    $boxes[1].classList.add('won');
    $boxes[2].classList.add('won');
  }
  if (
    $boxes[0].innerText &&
    $boxes[3].innerText &&
    $boxes[6].innerText &&
    $boxes[0].innerText === $boxes[3].innerText &&
    $boxes[3].innerText === $boxes[6].innerText
  ) {
    $boxes[0].classList.add('won');
    $boxes[3].classList.add('won');
    $boxes[6].classList.add('won');
  }
  if (
    $boxes[0].innerText &&
    $boxes[4].innerText &&
    $boxes[8].innerText &&
    $boxes[0].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[8].innerText
  ) {
    $boxes[0].classList.add('won');
    $boxes[4].classList.add('won');
    $boxes[8].classList.add('won');
  }
  if (
    $boxes[1].innerText &&
    $boxes[4].innerText &&
    $boxes[7].innerText &&
    $boxes[1].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[7].innerText
  ) {
    $boxes[1].classList.add('won');
    $boxes[4].classList.add('won');
    $boxes[7].classList.add('won');
  }
  if (
    $boxes[2].innerText &&
    $boxes[5].innerText &&
    $boxes[8].innerText &&
    $boxes[2].innerText === $boxes[5].innerText &&
    $boxes[5].innerText === $boxes[8].innerText
  ) {
    $boxes[2].classList.add('won');
    $boxes[5].classList.add('won');
    $boxes[8].classList.add('won');
  }
  if (
    $boxes[2].innerText &&
    $boxes[4].innerText &&
    $boxes[6].innerText &&
    $boxes[2].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[6].innerText
  ) {
    $boxes[2].classList.add('won');
    $boxes[4].classList.add('won');
    $boxes[6].classList.add('won');
  }
  if (
    $boxes[3].innerText &&
    $boxes[4].innerText &&
    $boxes[5].innerText &&
    $boxes[3].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[5].innerText
  ) {
    $boxes[3].classList.add('won');
    $boxes[4].classList.add('won');
    $boxes[5].classList.add('won');
  }
};
