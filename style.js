const inputIdade = document.getElementById("idade");
const button = document.getElementById("button");
const mensagem = document.getElementById("mensagem");

button.addEventListener("click", function() {
  const idade = Number(inputIdade.value);

  if (idade === 0 || isNaN(idade)) {
    mensagem.textContent = "Por favor, digite sua idade!";
    
    return;
  }

  if (idade <= 12) {
    mensagem.textContent = "Você é uma criança!";
    mensagem.style.color = "green";
  } else if (idade <= 17) {
    mensagem.textContent = "Você é um adolescente!";
    
  } else {
    mensagem.textContent = "Você é um adulto!";

  }

});
