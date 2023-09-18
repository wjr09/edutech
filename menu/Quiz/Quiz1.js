import { perguntas } from "./PerguntasQuiz1.js";

const main = document.querySelector("main")
let numeroPergunta = 1

gerarPergunta(numeroPergunta)

function gerarPergunta(numeroPergunta) {
    main.innerHTML = `
        <h2 class="pergunta">${numeroPergunta} - ${perguntas[numeroPergunta - 1].pergunta}</h2>
        <div class="respostas">
        <div class="resposta_a">
            <h2>A</h2>
            <p>${perguntas[numeroPergunta - 1].alternativas[0]}</p>
        </div>
        <div class="resposta_b">
            <h2>B</h2>
            <p>${perguntas[numeroPergunta - 1].alternativas[1]}</p>
        </div>
        <div class="resposta_c">
            <h2>C</h2>
            <p>${perguntas[numeroPergunta - 1].alternativas[2]}</p>
        </div>
        <div class="resposta_d">
            <h2>D</h2>
            <p>${perguntas[numeroPergunta - 1].alternativas[3]}</p>
        </div>
        <div class="botao">
            <button id="proxima" onclick="proximaPergunta()">Próxima</button>
        </div>
        </div>
    `
}

const proximaBtn = document.querySelector("#proxima")
proximaBtn.addEventListener('click', proximaPergunta)

function proximaPergunta() {
    numeroPergunta += 1
    gerarPergunta(numeroPergunta)
}