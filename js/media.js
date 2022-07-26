function Calcular() {
  var n1 = Number(document.getElementById("nota1").value);
  var n2 = Number(document.getElementById("nota2").value);
  var n3 = Number(document.getElementById("nota3").value);
  var n4 = Number(document.getElementById("nota4").value);
  var name = document.getElementById("aluno").value;
  resultSituacao = document.getElementById("situacao");

  firstName = name.split(' ')[0]; //separar as strings por vírgula e capturar a primeira posição do array de strings
  media = (n1 + n2 + n3 + n4) / 4;

  if (media >= 6) {
    resultSituacao.innerHTML = "<p class='aprovado'>A situacao do(a) " + firstName + " é APROVADO, tendo a média " + media + "</p>";
  } else {
    resultSituacao.innerHTML = "<p class='reprovado'>A situacao do(a) " + firstName + " é REPROVADO, tendo a média " + media + "</p>";
  }
}