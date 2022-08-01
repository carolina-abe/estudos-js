function sortear() {
  var n1 = Number(prompt("Jogador 1: Digite um numero"));
  var n2 = Number(prompt("Jogador 2: Digite um numero"));

  resultJogador1 = document.getElementById("jogador1");
  resultJogador2 = document.getElementById("jogador2");
  resultado = document.getElementById("resultado");

  resultJogador1.innerHTML = "<p>" + n1 + "</p>";
  resultJogador2.innerHTML = "<p>" + n2 + "</p>";

  if (n1 > n2) {
    resultado.innerHTML = "<p>Jogador 1 digitou " + n1 + " portanto ganhou</p>";
  } else if(n2 > n1) {
    resultado.innerHTML = "<p>Jogador 2 digitou " + n2 + " portanto ganhou</p>";
  } else {
    resultado.innerHTML = "<p>Ambos digitaram o mesmo número e deu empate</p>";
  }
}