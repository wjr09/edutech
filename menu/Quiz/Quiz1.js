
const questao = document.querySelector("#questao");
const caixaderesposta = document.querySelector("#caixaderesposta");
const quizzContainer = document.querySelector("#quizz-container");
const pontuacaoContainer = document.querySelector("#score-container");
const letras = ["a", "b", "c", "d"];
let pontos= 0;
let questaoatual = 0;

const questoes = [
  {
    "questao": "A natureza é o mundo material em que vive o ser humano, sendo constituída pela biota. Desse modo, a comunidade biótica é formada por",
    "respostas": [
      {
        "resposta": "Temperatura, sais mineras e umidade",
        "correto": false
      },
      {
        "resposta": "Solos, plantas e temperatura",
        "correto": true
      },
      {
        "resposta": "Plantas, animais e microrganismo",
        "correto": false
      },
      {
        "resposta": "Rios, atmosfera e solo",
        "correto": false
      },
    ]
  },
  {
    "questao": "Marque a alternativa incorreta:",
    "respostas": [
      {
        "resposta": "Nos ecossistemas, os organismos interagem com outros.",
        "correto": true
      },
      {
        "resposta": "Nos ecossistemas, ocorrem relações ecológicas",
        "correto": false
      },
      {
        "resposta": "Nos ecossistemas, os organismos não interagem com fatores físicos",
        "correto": false
      },
      {
        "resposta": "Recifes de coral são exemplos de ecossistemas aquáticos",
        "correto": false
      },
    ]
  },
  {
    "questao": "No ecossistema, um fungo, uma coruja e um coelho podem desempenhar os papéis, respectivamente, de:",
    "respostas": [
      {
        "resposta": "Decompositor, consumidor de 2ª ordem e consumidorde 1ª ordem",
        "correto": true
      },
      {
        "resposta": "Produtor, consumidor de 1ª ordem e consumidor de 2ª ordem",
        "correto": false
      },
      {
        "resposta": "Consumidor de 1ª ordem, consumidor de 2ª ordem e consumidor de 1ª ordem",
        "correto": false
      },
      {
        "resposta": "Consumidor de 2ª ordem, consumidor de 3ª ordem e consumidor de 1ª ordem",
        "correto": false
      },
    ]
  },
  {
    "questao": "(I) vegetação → insetos → anfíbios → cobras → fungos.(II) vegetação → coelho → gavião.(III) fitoplâncton → zooplâncton → peixes → tubarão.A maior quantidade de energia disponível para os níveis tróficos mais elevados estará::",
    "respostas": [
      {
        "resposta": "Apenas na cadeia (I)",
        "correto": false
      },
      {
        "resposta": "Apenas nas cadeias (I) e (III)",
        "correto": false
      },
      {
        "resposta": "Apenas na cadeia (II)",
        "correto": true
      },
      {
        "resposta": "Apenas nas cadeias (I) e (II)",
        "correto": false
      },
    ]
  },
  {
    "questao": "O conjunto formado pelos componentes vivos e pelos não vivos de um ambiente, onde os seres vivos mantêm relações entre si e com os componentes não vivos, é chamado de:",
    "respostas": [
      {
        "resposta": "Apenas na cadeia (I)",
        "correto": false
      },
      {
        "resposta": "Apenas nas cadeias (I) e (III)",
        "correto": false
      },
      {
        "resposta": "Apenas na cadeia (II)",
        "correto": true
      },
      {
        "resposta": "Apenas nas cadeias (I) e (II)",
        "correto": false
      },
    ]
  },
  {
    "questao": "Qual dos componentes abaixo pode ser considerado uma parte não viva de um ecossistema?",
    "respostas": [
      {
        "resposta": "Peixes",
        "correto": false
      },
      {
        "resposta": "Esqueleto de um animal",
        "correto": false
      },
      {
        "resposta": "Casca de Árvore",
        "correto": false
      },
      {
        "resposta": "Água",
        "correto": true

       

      },
    ]
  }, 
  {
    "questao": "Os ______________________, que são as partes sem vida do ambiente, como o solo, a atmosfera, a luz e a água.",
    "respostas": [
      {
        "resposta": "Componentes bióticos",                               
        "correto": false
      },
      {
        "resposta": "Componentes inertes",
        "correto": false
      },
      {
        "resposta": "Componentes sólidos",
        "correto": false
      },
      {
        "resposta": "Componentes abióticos",
        "correto": true

       

      },
    ]
  },
  {
    "questao": "De acordo com o tipo de alimentação, os seres vivos podem ser classificados em autotróficos e heterotróficos. Analise as alternativas seguintes e marque aquela que melhor define um ser autotrófico:",
    "respostas": [
      {
        "resposta": "Seres autotróficos são aqueles que retiram seu alimento de outros seres vivos.",                               
        "correto": false
      },
      {
        "resposta": "Seres autotróficos são aqueles organismos que se alimentamtanto de vegetais quanto de animais.",
        "correto": false
      },
      {
        "resposta": "Seres autotróficos são organismos capazes de produzir seu próprio alimento utilizando matéria orgânica proveniente de outro ser vivo.",
        "correto": false
      },
      {
        "resposta": "Seres autotróficos são organismos capazes de sintetizar seu próprio alimento, não necessitando da matéria orgânica já produzida.",
        "correto": true  

      },
    ] 
  },
  {
    "questao": "Qual dos seguintes elementos é um fator abiótico em um ecossistema terrestre?",
    "respostas": [
      {
        "resposta": "Árvores frutíferas",                               
        "correto": false
      },
      {
        "resposta": "Água do rio.",
        "correto": false
      },
      {
        "resposta": "Seres autotróficos são organismos capazes de produzir seu próprio alimento utilizando matéria orgânica proveniente de outro ser vivo.",
        "correto": true 
      },
      {
        "resposta": "Pássaros migratórios..",
        "correto":  false
      },
    ] 
  },
  {
    "questao": "Considere que o destino dos heterótrofos é se alimentarem de um autótrofo, ou ainda de outro heterótrofo que, por sua vez, alimentou-se de um autótrofo. Isso pode continuar por muitos níveis tróficos, mas no início sempre há um autótrofo. A esse respeito, é correto afirmar:",
    "respostas": [
      {
        "resposta": "Seres fotossintetizantes são base de cadeia alimentar e servem de alimento para consumidores primários, que são alimento para consumidores secundários.",                               
        "correto": true
      },
      {
        "resposta": "Em uma cadeia alimentar, os autótrofos estão sempre no início, mas também podem comportar-se como consumidores primários e secundários.",
        "correto": false
      },
      {
        "resposta": "Seres autótrofos estão na base da cadeia alimentar, pois são produtores e consomem diretamente os seres fotossintetizantes.",
        "correto": false
      },
      {
        "resposta": "Os heterótrofos são carnívoros predadores de herbívoros autótrofos, que são a base da cadeia alimentar e consumidores de maior biomassa.",
        "correto":  false
      },
    ] 
  },
  
  
]

function init() {
  criarquestao(0);
}

function createQuestion(i) {
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  const questionText = questao.querySelector("#texto-questao");
  const questionNumber = questao.querySelector("#numero-questao");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach(function(answer, i) {

    const answerTemplate = document.querySelector(".resposta-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".letra-botao");
    const answerText = answerTemplate.querySelector(".resposta-questao");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['resposta'];

    answerTemplate.setAttribute("resposta-correta", answer["correto"]);

    answerTemplate.classList.remove("esconder");
    answerTemplate.classList.remove("resposta-template");

    answersBox.appendChild(respostaTemplate);

    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });

  });

  actualQuestion++;
}
function checkAnswer(btn) {

  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {

    if(button.getAttribute("resposta-correta") === "true") {

      button.classList.add("resposta-correta");

      if(btn === button) {
        points++;
      }

    } else {

      button.classList.add("resposta-errada");

    }

  });

  nextQuestion();
}

function nextQuestion() {

  setTimeout(function() {

    if(actualQuestion >= questions.length) {
      showSucccessMessage();
      return;
    }

    createQuestion(actualQuestion);

  }, 1000);

}

function showSucccessMessage() {

  hideOrShowQuizz();

  
  const pontuacao = ((pontos / questions.length) * 100).toFixed(2);

  const mostrarpontuacao = document.querySelector("#mostrar-pontuacao span");

  mostrarpontuacao.textContent = pontuacao.toString();


  const respostacorreta = document.querySelector("#resposta-correta");
  respostacorreta.textContent = pontos;

  const totalquestao = document.querySelector("#quantidade-de-perguntas");
  totalquestao.textContent = questions.length;

}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("esconder");
  scoreContainer.classList.toggle("esconder");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#resetar");

restartBtn.addEventListener("click", function() {

  // zerar o jogo
  questaoatual = 0;
  pontos = 0;
  mostrarouesconderquizz();
  init();

});

// Inicialização do Quizz
init();