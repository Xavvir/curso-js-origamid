// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse() {
//   document.body.classList.toggle("active");
// }

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

// let tempo1 = Math.random() + 1;

let i = 0;
let timer;

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", encerrar);

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

function encerrar() {
  tempo.innerText = 0
  i = 0
}

setTimeout(
  () => console.log(`Se passaram ${tempo1.toFixed(2)} segundos`),
  tempo1
);
