// Liste de questions
const questionList = {
    "liste": [
        {
            "question": "Qu'est-ce que JSON?",
            "level": 3,
            "answer": "JSON (JavaScript Object Notation) est un format léger d'échange de données."
        },
        {
            "question": "Comment déclarer une variable en JavaScript?",
            "level": 2,
            "answer": "Utilisez 'var', 'let', ou 'const' suivi du nom de la variable."
        },
        {
            "question": "Quelle est la capitale de la France?",
            "level": 1,
            "answer": "La capitale de la France est Paris."
        },
        {
            "question": "Quelle est la capitale de la Belgique?",
            "level": 1,
            "answer": "Bruxelles."
        }
    ]
};
const container = document.querySelector('.container');

// Recupération des éléments
const questions = document.querySelectorAll('.question');
const logos = document.querySelectorAll('.logo');
const answers = document.querySelectorAll('.question-answer');

// Affiche la réponse correspondante à la question lors du clique sur le logo
function printAnswer(id) {
    const allAnswers = document.querySelectorAll('.question-answer');
    // Masque toutes les réponses
    allAnswers.forEach((answer) => {
        answer.style.display = 'none';
    });
    // Affiche la réponse correspondante
    const answerParagraph = document.querySelector(`[data-index="answer-${id}"]`);
    answerParagraph.innerText = questionList.liste[id - 1].answer;
    answerParagraph.style.display = 'flex';
}

function displayQuestions(item, i) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    logoDiv.id = i + 1;
    logoDiv.addEventListener('click', function(event) {
        const id = logoDiv.id;
        printAnswer(id);
    });
    if (item.level == 1) logoDiv.innerText = '🥉';
    else if (item.level == 2) logoDiv.innerText = '🥈';
    else logoDiv.innerText = '🥇';
    const questionTextDiv = document.createElement('div');
    questionTextDiv.className = 'question-text';
    const questionTitle = document.createElement('h1');
    questionTitle.innerText = item.question;
    const answerDiv = document.createElement('div');
    answerDiv.className = 'question-answer';
    answerDiv.dataset.index = `answer-${i + 1}`;
    const answerParagraph = document.createElement('p');
    questionTextDiv.appendChild(questionTitle);
    answerDiv.appendChild(answerParagraph);
    questionDiv.appendChild(logoDiv);
    questionDiv.appendChild(questionTextDiv);
    questionDiv.appendChild(answerDiv);
    container.appendChild(questionDiv);
}

function getVal() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    container.innerHTML = '';
    questionList.liste.filter((item, i) => {
        if (item.question.toLowerCase().includes(input)) {
            displayQuestions(item, i);
        }
    })
}

// Initialise les questions et les affiches dans le conteneur
function initializeQuestions() {
    questionList.liste.forEach((item, index) => {
        displayQuestions(item, index);
    });
}
initializeQuestions();