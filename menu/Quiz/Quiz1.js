// Declaração variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
    {
      "question": "A natureza é o mundo material em que vive o ser humano, sendo constituída pela biota. Desse modo, a comunidade biótica é formada por",
      "answers": [
        {
          "answer": "Temperatura, sais mineras e umidade",
          "correct": false
        },
        {
          "answer": "Solos, plantas e temperatura",
          "correct": true
        },
        {
          "answer": "Plantas, animais e microrganismo",
          "correct": false
        },
        {
          "answer": "Rios, atmosfera e solo",
          "correct": false
        },
      ]
    },
    {
      "question": "Marque a alternativa incorreta:",
      "answers": [
        {
          "answer": "Nos ecossistemas, os organismos interagem com outros.",
          "correct": true
        },
        {
          "answer": "Nos ecossistemas, ocorrem relações ecológicas",
          "correct": false
        },
        {
          "answer": "Nos ecossistemas, os organismos não interagem com fatores físicos",
          "correct": false
        },
        {
          "answer": "Recifes de coral são exemplos de ecossistemas aquáticos",
          "correct": false
        },
      ]
    },
    {
      "question": "No ecossistema, um fungo, uma coruja e um coelho podem desempenhar os papéis, respectivamente, de:",
      "answers": [
        {
          "answer": "Decompositor, consumidor de 2ª ordem e consumidorde 1ª ordem",
          "correct": true
        },
        {
          "answer": "Produtor, consumidor de 1ª ordem e consumidor de 2ª ordem",
          "correct": false
        },
        {
          "answer": "Consumidor de 1ª ordem, consumidor de 2ª ordem e consumidor de 1ª ordem",
          "correct": false
        },
        {
          "answer": "Consumidor de 2ª ordem, consumidor de 3ª ordem e consumidor de 1ª ordem",
          "correct": false
        },
      ]
    },
    {
      "question": "(I) vegetação → insetos → anfíbios → cobras → fungos.(II) vegetação → coelho → gavião.(III) fitoplâncton → zooplâncton → peixes → tubarão.A maior quantidade de energia disponível para os níveis tróficos mais elevados estará::",
      "answers": [
        {
          "answer": "Apenas na cadeia (I)",
          "correct": false
        },
        {
          "answer": "Apenas nas cadeias (I) e (III)",
          "correct": false
        },
        {
          "answer": "Apenas na cadeia (II)",
          "correct": true
        },
        {
          "answer": "Apenas nas cadeias (I) e (II)",
          "correct": false
        },
      ]
    },
    {
      "question": "O conjunto formado pelos componentes vivos e pelos não vivos de um ambiente, onde os seres vivos mantêm relações entre si e com os componentes não vivos, é chamado de:",
      "answers": [
        {
          "answer": "Apenas na cadeia (I)",
          "correct": false
        },
        {
          "answer": "Apenas nas cadeias (I) e (III)",
          "correct": false
        },
        {
          "answer": "Apenas na cadeia (II)",
          "correct": true
        },
        {
          "answer": "Apenas nas cadeias (I) e (II)",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual dos componentes abaixo pode ser considerado uma parte não viva de um ecossistema?",
      "answers": [
        {
          "answer": "Peixes",
          "correct": false
        },
        {
          "answer": "Esqueleto de um animal",
          "correct": false
        },
        {
          "answer": "Casca de Árvore",
          "correct": false
        },
        {
          "answer": "Água",
          "correct": true
  
         
  
        },
      ]
    }, 
    {
      "question": "Os ______________________, que são as partes sem vida do ambiente, como o solo, a atmosfera, a luz e a água.",
      "answers": [
        {
          "answer": "Componentes bióticos",                               
          "correct": false
        },
        {
          "answer": "Componentes inertes",
          "correct": false
        },
        {
          "answer": "Componentes sólidos",
          "correct": false
        },
        {
          "answer": "Componentes abióticos",
          "correct": true
  
         
  
        },
      ]
    },
    {
      "question": "De acordo com o tipo de alimentação, os seres vivos podem ser classificados em autotróficos e heterotróficos. Analise as alternativas seguintes e marque aquela que melhor define um ser autotrófico:",
      "answers": [
        {
          "answer": "Seres autotróficos são aqueles que retiram seu alimento de outros seres vivos.",                               
          "correct": false
        },
        {
          "answer": "Seres autotróficos são aqueles organismos que se alimentamtanto de vegetais quanto de animais.",
          "correct": false
        },
        {
          "answer": "Seres autotróficos são organismos capazes de produzir seu próprio alimento utilizando matéria orgânica proveniente de outro ser vivo.",
          "correct": false
        },
        {
          "answer": "Seres autotróficos são organismos capazes de sintetizar seu próprio alimento, não necessitando da matéria orgânica já produzida.",
          "correct": true  
  
        },
      ] 
    },
    {
      "question": "Qual dos seguintes elementos é um fator abiótico em um ecossistema terrestre?",
      "answers": [
        {
          "answer": "Árvores frutíferas",                               
          "correct": false
        },
        {
          "answer": "Água do rio.",
          "correct": false
        },
        {
          "answer": "Seres autotróficos são organismos capazes de produzir seu próprio alimento utilizando matéria orgânica proveniente de outro ser vivo.",
          "correct": true 
        },
        {
          "answer": "Pássaros migratórios..",
          "correct":  false
        },
      ] 
    },
    {
      "question": "Considere que o destino dos heterótrofos é se alimentarem de um autótrofo, ou ainda de outro heterótrofo que, por sua vez, alimentou-se de um autótrofo. Isso pode continuar por muitos níveis tróficos, mas no início sempre há um autótrofo. A esse respeito, é correto afirmar:",
      "answers": [
        {
          "answer": "Seres fotossintetizantes são base de cadeia alimentar e servem de alimento para consumidores primários, que são alimento para consumidores secundários.",                               
          "correct": true
        },
        {
          "answer": "Em uma cadeia alimentar, os autótrofos estão sempre no início, mas também podem comportar-se como consumidores primários e secundários.",
          "correct": false
        },
        {
          "answer": "Seres autótrofos estão na base da cadeia alimentar, pois são produtores e consomem diretamente os seres fotossintetizantes.",
          "correct": false
        },
        {
          "answer": "Os heterótrofos são carnívoros predadores de herbívoros autótrofos, que são a base da cadeia alimentar e consumidores de maior biomassa.",
          "correct":  false
        },
      ] 
    },
    
    
  ]

// Substituição do quizz para a primeria pergunta
function init() {
  // criar a primeira pergunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {

  // Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere as alternativas
  questions[i].answers.forEach(function(answer, i) {

    // Cria o template do botão do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remover hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    // Inserir um evento de click no botão
    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });

  });

  // Incrementar o número da questão
  actualQuestion++;

}

// Verificando resposta do usuário
function checkAnswer(btn) {

  // selecionar todos botões
  const buttons = answersBox.querySelectorAll("button");

  // verifica se a resposta está correta e adiciona classes nos botões
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {

      button.classList.add("correct-answer");

      // checa se o usuário acertou a pergunta
      if(btn === button) {
        // incremento dos pontos
        points++;
      }

    } else {

      button.classList.add("wrong-answer");

    }

  });

  // Exibir próxima pergunta
  nextQuestion();

}

// Exibie a próxima pergunta no quizz
function nextQuestion() {

  // timer para usuário ver as respostas
  setTimeout(function() {

    // verifica se ainda há perguntas
    if(actualQuestion >= questions.length) {
      // apresenta a msg de sucesso
      showSucccessMessage();
      return;
    }

    createQuestion(actualQuestion);

  }, 1000);

}

// Exibe a tela final
function showSucccessMessage() {

  hideOrShowQuizz();

  // trocar dados da tela de sucesso

  // calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answer");
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

// Mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {

  // zerar o jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();

});

// Inicialização do Quizz
init();