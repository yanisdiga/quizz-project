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
// Initialise les questions et les affiches dans le conteneur
function initializeQuestions() {
    questionList.liste.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const logoDiv = document.createElement('div');
        logoDiv.className = 'logo';
        logoDiv.id = index + 1;
        if (item.level == 1) logoDiv.innerText = '🥉';
        else if (item.level == 2) logoDiv.innerText = '🥈';
        else logoDiv.innerText = '🥇';

        const questionTextDiv = document.createElement('div');
        questionTextDiv.className = 'question-text';
        const questionTitle = document.createElement('h1');
        questionTitle.innerText = item.question;

        const answerDiv = document.createElement('div');
        answerDiv.className = 'question-answer';
        answerDiv.id = index + 1;
        const answerParagraph = document.createElement('p');
        answerParagraph.innerText = item.answer;

        // Assemble les éléments
        questionTextDiv.appendChild(questionTitle);
        answerDiv.appendChild(answerParagraph);
        questionDiv.appendChild(logoDiv);
        questionDiv.appendChild(questionTextDiv);
        questionDiv.appendChild(answerDiv);

        // Ajoute la question au conteneur
        container.appendChild(questionDiv);
    });
}
initializeQuestions();


// Recupération des éléments
const questions = document.querySelectorAll('.question');
const logos = document.querySelectorAll('.logo');
const answers = document.querySelectorAll('.question-answer');

// Affiche la réponse correspondante à la question lors du clique sur le logo
function printAnswer() {
    questions.forEach((question) => {
        logos.forEach((logo) => {
            logo.addEventListener('click', () => {
                const id = logo.id;
                answers.forEach((answer) => {
                    if (answer.id == id) {
                        answer.style.display = 'flex';
                    } else {
                        answer.style.display = 'none';
                    }
                });
            });
        });
    });
}
printAnswer();