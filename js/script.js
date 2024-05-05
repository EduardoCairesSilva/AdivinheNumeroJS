const elements = {
  botaoClique: document.getElementById("botao-clique"),
  fraseInicial: document.getElementById("frase-inicial"),
};

let numeroAleatorio = Math.floor(Math.random() * 101);

elements.botaoClique.addEventListener("click", function (event) {
  let numeroEscolhido = Number(prompt("Qual é o seu palpite?"));

  numeroEscolhido === numeroAleatorio
    ? ((elements.fraseInicial.innerHTML = `<strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numeroAleatorio}!`),
      (elements.botaoClique.style.visibility = "hidden"))
    : numeroEscolhido < numeroAleatorio
    ? (elements.fraseInicial.innerHTML += `Você falou ${numeroEscolhido}. Meu número é <strong>MAIOR!</strong> <br>`)
    : (elements.fraseInicial.innerHTML += `Você falou ${numeroEscolhido}. Meu número é <strong>MENOR!</strong> <br>`);
});
