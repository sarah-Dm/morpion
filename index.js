const $boxes = document.querySelectorAll('.box');
const me = '❌';
const bot = '⭕️';
let fonctionCall = 0;

//commencer le jeu au click sur "Play"
const $startButton = document.querySelector('button');
const $pop_up = document.querySelector('.pop_up');
const startGame = () => {
  $pop_up.classList.remove('pop_up');
  $pop_up.classList.add('remove');
};
$startButton.addEventListener('click', () => startGame());

const replay = () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

//cocher alternativement avec une croix ou un rond
//1- fixer une variable qui compte le nbre de fois où on appelle la fonction
const checkBox = (event) => {
  //2- faire avancer le curseur à chaque fois que la fonction est appelée
  fonctionCall += 1;
  //si jeu est terminé (sans victoire)
  if (fonctionCall === 9) replay();
  //3- lier le rond à nbre paire/ la croix à nbre impair
  if (fonctionCall % 2) {
    //créer des éléments DOM ❌
    event.target.innerHTML = me;
  } else {
    //créer des éléments DOM ⭕️
    event.target.innerHTML = bot;
  }
  checkEndGame();
};

//lier le cochage au click sur les cases
$boxes.forEach((box, i) => {
  box.addEventListener('click', checkBox);
});

//si les div sont identiques en ligne/colonne/diagonale (contiennent croix ou rond) alors arreter le jeu
const checkEndGame = () => {
  let color;
  if (
    $boxes[0].innerText &&
    $boxes[1].innerText &&
    $boxes[2].innerText &&
    $boxes[0].innerText === $boxes[1].innerText &&
    $boxes[1].innerText === $boxes[2].innerText
  ) {
    if ($boxes[0].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[0].classList.add(color);
    $boxes[1].classList.add(color);
    $boxes[2].classList.add(color);
  }
  if (
    $boxes[0].innerText &&
    $boxes[3].innerText &&
    $boxes[6].innerText &&
    $boxes[0].innerText === $boxes[3].innerText &&
    $boxes[3].innerText === $boxes[6].innerText
  ) {
    if ($boxes[0].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[0].classList.add(color);
    $boxes[3].classList.add(color);
    $boxes[6].classList.add(color);
  }
  if (
    $boxes[0].innerText &&
    $boxes[4].innerText &&
    $boxes[8].innerText &&
    $boxes[0].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[8].innerText
  ) {
    if ($boxes[0].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[0].classList.add(color);
    $boxes[4].classList.add(color);
    $boxes[8].classList.add(color);
  }
  if (
    $boxes[1].innerText &&
    $boxes[4].innerText &&
    $boxes[7].innerText &&
    $boxes[1].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[7].innerText
  ) {
    if ($boxes[1].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[1].classList.add(color);
    $boxes[4].classList.add(color);
    $boxes[7].classList.add(color);
  }
  if (
    $boxes[2].innerText &&
    $boxes[5].innerText &&
    $boxes[8].innerText &&
    $boxes[2].innerText === $boxes[5].innerText &&
    $boxes[5].innerText === $boxes[8].innerText
  ) {
    if ($boxes[2].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[2].classList.add(color);
    $boxes[5].classList.add(color);
    $boxes[8].classList.add(color);
  }
  if (
    $boxes[2].innerText &&
    $boxes[4].innerText &&
    $boxes[6].innerText &&
    $boxes[2].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[6].innerText
  ) {
    if ($boxes[2].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[2].classList.add(color);
    $boxes[4].classList.add(color);
    $boxes[6].classList.add(color);
  }
  if (
    $boxes[3].innerText &&
    $boxes[4].innerText &&
    $boxes[5].innerText &&
    $boxes[3].innerText === $boxes[4].innerText &&
    $boxes[4].innerText === $boxes[5].innerText
  ) {
    if ($boxes[3].innerText === me) {
      color = 'wonMe';
    } else color = 'wonBot';
    $boxes[3].classList.add(color);
    $boxes[4].classList.add(color);
    $boxes[5].classList.add(color);
  }
};
