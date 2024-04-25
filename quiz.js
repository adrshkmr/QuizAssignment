const questions = [
    { title: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], correctAnswer: "Hyper Text Markup Language", score: 10 },
    { title: "Which is the correct CSS syntax?", options: ["{body;color:black;}", "{body:color=black;}", "body:color=black;", "body {color: black;}"], correctAnswer: "body {color: black;}", score: 10 },
    { title: "How do you insert a comment in a JavaScript?", options: ["//This is a comment", "'This is a comment", "&lt;!--This is a comment--&gt;", "None of these"], correctAnswer: "//This is a comment", score: 10 },
    { title: "Which built-in method returns the calling string value converted to upper case?", options: ["toUpperCase()", "toUpper()", "changeCase(case)", "None of these"], correctAnswer: "toUpperCase()", score: 10 },
    { title: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?", options: ["pop()", "push()", "join()", "map()"], correctAnswer: "push()", score: 10 },
    { title: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["&lt;script href='xxx.js'&gt;", "&lt;script name='xxx.js'&gt;", "&lt;script src='xxx.js'&gt;", "None of these"], correctAnswer: "&lt;script src='xxx.js'&gt;", score: 10 },
    { title: "The external JavaScript file must contain &lt;script&gt; tag. True or False?", options: ["True", "False"], correctAnswer: "False", score: 10 },
    { title: "Which of the following is not a reserved word in JavaScript?", options: ["interface", "throws", "program", "short"], correctAnswer: "program", score: 10 },
    { title: "How do you declare a JavaScript variable?", options: ["v carName;", "var carName;", "variable carName;", "None of these"], correctAnswer: "var carName;", score: 10 },
    { title: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseclick", "onmouseover", "onclick", "onchange"], correctAnswer: "onclick", score: 10 },
];

let currentQuestion = 0;
let score = 0;
let selectedOption;

function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].title;
    const options = questions[currentQuestion].options.map((option, index) => 
        `<input type="radio" id="option${index}" name="option" value="${option}"><label for="option${index}" class="option-label">${option}</label><br>`
    ).join('');
    document.getElementById('options').innerHTML = options;
}

function submitAnswer() {
    selectedOption = document.querySelector('input[name="option"]:checked');
    const feedback = document.getElementById('feedback');
    if (selectedOption && selectedOption.value === questions[currentQuestion].correctAnswer) {
        score += questions[currentQuestion].score;
        feedback.textContent = 'Correct!';
        feedback.className = 'correct';
    } else {
        feedback.textContent = 'Incorrect!';
        feedback.className = 'incorrect';
    }
    feedback.style.display = 'block';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById('submit').style.display = 'block';
        document.getElementById('next').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';
    } else {
        displayResults();
    }
}

function displayResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('quiz-label').textContent = 'SCORES';
    document.getElementById('score').textContent = `Your score: ${score}`;
    const correctAnswers = questions.map((question, index) => 
        `${index + 1}. ${question.title} - Correct answer: <span class="correct-answer">${question.correctAnswer}</span>`
    ).join('<br>');
    document.getElementById('correct-answers').innerHTML = correctAnswers;
}

document.getElementById('submit').addEventListener('click', submitAnswer);
document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('restart').addEventListener('click', () => location.reload());

displayQuestion();