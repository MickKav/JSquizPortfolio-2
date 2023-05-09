const questions = [
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Perth", correct: false},
            { text: "Sydney", correct: false},
            { text: "Canberra", correct: true},
            { text: "Melbourne", correct: false},
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Rio de Janeiro", correct: false},
            { text: "Brasilia", correct: true},
            { text: "Sao Paolo", correct: false},
            { text: "Recife", correct: false},
        ]
    },
    {
        question: "What is the capital of Switzerland?",
        answers: [
            { text: "Bern", correct: true},
            { text: "Zurich", correct: false},
            { text: "Geneva", correct: false},
            { text: "Basel", correct: false},
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Vancouver", correct: false},
            { text: "Toronto", correct: false},
            { text: "Calgary", correct: false},
            { text: "Ottawa", correct: true},
        ]
    },
    {
        question: "What is the capital Scotland?",
        answers: [
            { text: "Glasgow", correct: false},
            { text: "Aberdeen", correct: false},
            { text: "Edinburgh", correct: true},
            { text: "Inverness", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();