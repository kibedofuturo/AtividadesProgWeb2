const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnReset = document.getElementById("btnReset");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const resultadoIntermediario = document.getElementById(
  "resultadoIntermediario"
);
const resultadoFinalRodada = document.getElementById("resultadoFinalRodada");
const resultadoFinal = document.getElementById("resultadoFinal");
const turn = document.getElementById("turn");

const maxRodadas = 10;
let rodadas = JSON.parse(localStorage.getItem("rodadas")) || 0; // quantidade de rodadas já jogadas
let dado1 = {}; // valor do dado do jogador 1
let dado2 = {}; // valor do dado do jogador 2
let score1 = JSON.parse(localStorage.getItem("score1")) || 0; // pontuação do primeiro jogador
let score2 = JSON.parse(localStorage.getItem("score2")) || 0; // pontuação do segundo jogador

turn.innerHTML = rodadas;
resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;

if (rodadas === maxRodadas) {
  localStorage.removeItem("rodadas");
  localStorage.removeItem("score1");
  localStorage.removeItem("score2");
  turn.innerHTML = rodadas;
  resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;
}

const calcularRodada = () => {
  if (dado1.valor > dado2.valor) {
    score1 += 1;
    resultadoIntermediario.innerHTML = "Jogador 1 ganhou";
  } else if (dado2.valor > dado1.valor) {
    score2 += 1;
    resultadoIntermediario.innerHTML = "Jogador 2 ganhou";
  } else {
    resultadoIntermediario.innerHTML = "Empate";
  }

  localStorage.setItem("score1", score1);
  localStorage.setItem("score2", score2);

  resultadoFinalRodada.innerHTML = `${getLocalStorage("score1")} x ${getLocalStorage("score2")}` || `${score1} x ${score2}`;
};

const calcularFimJogo = () => {
  if (rodadas === maxRodadas) {
    btn1.disabled = true;
    if (score1 > score2) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 1 ganhou";
    } else if (score2 > score1) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 2 ganhou";
    } else {
      resultadoFinal.innerHTML = "Resultado Final = Empate";
    }
  }
  localStorage.setItem("rodadas", rodadas);
};

const configuracaoJogada = (bt1, bt2, dado, resultado) => {
  dado.valor = Math.floor(Math.random() * 6) + 1;
  bt1.disabled = true;
  bt2.disabled = false;
  resultado.innerHTML = dado.valor;
};

const getLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
}

const handleBtJogador1Click = () => {
  configuracaoJogada(btn1, btn2, dado1, result1);
  rodadas += 1;
  turn.innerHTML = rodadas;
  result2.innerHTML = "";
};

const handleBtJogador2Click = () => {
  configuracaoJogada(btn2, btn1, dado2, result2);
  calcularRodada();
  calcularFimJogo();
};

const handleBtReiniciarClick = () => {
  rodadas = 0;
  score1 = 0;
  score2 = 0;
  turn.innerHTML = "0";
  result1.innerHTML = "";
  result2.innerHTML = "";
  resultadoIntermediario.innerHTML = "0 x 0";
  resultadoFinalRodada.innerHTML = "";
  resultadoFinal.innerHTML = "";
  btn1.disabled = false;
  localStorage.removeItem("rodadas");
  localStorage.removeItem("score1");
  localStorage.removeItem("score2");
};

btn1.onclick = handleBtJogador1Click;
btn2.onclick = handleBtJogador2Click;
btnReset.onclick = handleBtReiniciarClick;