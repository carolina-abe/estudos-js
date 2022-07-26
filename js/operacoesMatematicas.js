function Calcular(){
  let n1 = Number(prompt("Digite um número"));
  let n2 = Number(prompt("Digite outro número"));

// também pode ser feita a captura por meio de conversão
//let n1 = prompt("Digite um número");
//n1 = parseFloat(n1);

  let resultSoma = document.getElementById("soma");
  let resultSubtracao = document.getElementById("subtracao");
  let resultDivisao = document.getElementById("divisao");
  let resultMultiplicacao = document.getElementById("multiplicacao");
  let resultExponencial = document.getElementById("exponencial");
  let resultModulo = document.getElementById("modulo");

  soma = n1 + n2;
  subtracao = n1 - n2;
  divisao = n1 / n2;
  multiplicacao = n1 * n2;
  exponencial = n1 ** n2;
  mod = n1 % n2;

  resultSoma.innerHTML = "<p>O resultado da soma é " + soma + "</p>";
  resultSubtracao.innerHTML = "<p>O resultado da subtração é " + subtracao + "</p>";
  resultDivisao.innerHTML = "<p>O resultado da divisão é " + divisao + "</p>";
  resultMultiplicacao.innerHTML = "<p>O resultado da multiplicação é " + multiplicacao + "</p>";
  resultExponencial.innerHTML = "<p>O exponencial de " + n1 + "<sup>" + n2 + "</sup> é " + exponencial; 
  resultModulo.innerHTML = "<p>O resto da divisão entre " + n1 + " e " + n2 + " é " + mod; 

}