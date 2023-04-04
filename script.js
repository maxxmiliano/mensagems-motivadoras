const messages = [
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Acredite em si mesmo e todo o resto se encaixa. Tenha fé em seus próprios poderes e suas próprias belezas internas.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
    "A vida é 10% o que acontece comigo e 90% de como eu reajo a isso.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Não espere por oportunidades, crie-as.",
    "Lembre-se: sua única limitação é você mesmo.",
    "Não importa o quão devagar você vá, desde que não pare.",
  ];
  
  const messageContainer = document.querySelector(".message");
  const generateButton = document.querySelector("#generate-btn");
  
  generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    messageContainer.textContent = randomMessage;
  });