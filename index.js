window.addEventListener("load", inicia);

//Globais
let time = 3;
let score = 0;
let isPLaying;

//DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "Sed", "ac", "risus", "rutrum", "tempus", "sem", "non", "bibendum", "felis", "Nullam", "congue", "diam", "urna", "ac",
  "aliquam", "justo", "ultrices", "et", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per",
  "conubia", "nostra", "per", "inceptos", "himenaeos", "Phasellus", "mi", "felis", "accumsan", "eu", "orci", "at",
  "cursus", "luctus", "magna", "Nullam", "pretium", "erat", "id", "odio", "consectetur", "nec", "fringilla", "ex", "iaculis",
  "Maecenas", "vitae", "pretium", "nunc", "Pellentesque", "id", "eleifend", "sapien", "Morbi", "aliquam", "malesuada",
  "sollicitudin", "Donec", "vel", "auctor", "felis", "Sed", "cursus", "neque", "rutrum", "lacinia", "ligula", "nec",
  "scelerisque", "nulla", "Vestibulum", "ut", "ex", "a", "urna", "posuere", "cursus", "Nunc", "ac", "imperdiet", "est",
  "Sed", "condimentum", "turpis", "et", "pretium"];

//iniciando

function inicia() {
  //mostrar tempo sobrando
  seconds.innerHTML = 3;
  //primeira palavra
  showWord(words);
  //testando inputs
  wordInput.addEventListener("input", startMatch);
  //diminuindo cada segundo
  setInterval(countdown, 1000);
  //checando status
  setInterval(checkStatus, 50);
}

//testando inputs
function startMatch() {
  if (matchWords()) {
    isPLaying = true;
    time = 3 + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //if score-1 mostrar 0
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else {
    scoreDisplay.innerHTML = score;
      //score
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}


//pega e mostra
function showWord(words) {
  //random number
  const randNumber = Math.floor(Math.random() * words.length);
  //torna em palavra
  currentWord.innerHTML = words[randNumber];
}

//contador
function countdown() {
  //saber se o tempo acabou
  if (time > 0) {
      // diminue
      time--;
    } else if (time === 0) {
      //acaba
      isPLaying = false;
    }
    //timer
    timeDisplay.innerHTML = time;
  }

  //checando status
  function checkStatus() {
    if (!isPLaying && time === 0) {
      message.innerHTML = "Game Over!";
      score = -1;
    }
  }
