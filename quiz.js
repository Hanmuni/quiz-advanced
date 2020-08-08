let allQuestions;

let right_answer = 0;
let new_question = 0;
let progress = 0;

function init() {
    fetch('./questions/html.json')
        .then(response => response.json())
        .then(function (myJSON) {
            allQuestions = myJSON;
            showQuestions();
        });
}

function showQuestions() {
    document.getElementById('greeting').classList.add('d-none');
    document.getElementById('questions').classList.remove('d-none');

    if (new_question == allQuestions.length) {
        finishQuiz();
    }
    else {
        new_question = new_question + 1;
        console.log('Number of questions:',);
        progress = Math.round((new_question / allQuestions.length) * 10);

        hideElements();
        loadQuestion();
    }
}
function loadQuestion() {

    document.getElementById('question').innerHTML = allQuestions[new_question - 1]['question'];

    document.getElementById('answer1').innerHTML = allQuestions[new_question - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[new_question - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[new_question - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[new_question - 1]['answer_4'];
    right_answer = allQuestions[new_question - 1]['right_answer'];
}

function hideElements() {
    document.getElementById('next-btn').classList.add('d-none');

    document.getElementById('answer-A').classList.add('answer');
    document.getElementById('answer-A').classList.remove('wrong-answer');
    document.getElementById('answer-A').classList.remove('correct-answer');
    document.getElementById('answer-letter-A').classList.add('answer-letter');
    document.getElementById('answer-letter-A').classList.remove('wrong-answer-letter');
    document.getElementById('answer-letter-A').classList.remove('correct-answer-letter');

    document.getElementById('answer-B').classList.add('answer');
    document.getElementById('answer-B').classList.remove('wrong-answer');
    document.getElementById('answer-B').classList.remove('correct-answer');
    document.getElementById('answer-letter-B').classList.add('answer-letter');
    document.getElementById('answer-letter-B').classList.remove('wrong-answer-letter');
    document.getElementById('answer-letter-B').classList.remove('correct-answer-letter');

    document.getElementById('answer-C').classList.add('answer');
    document.getElementById('answer-C').classList.remove('wrong-answer');
    document.getElementById('answer-C').classList.remove('correct-answer');
    document.getElementById('answer-letter-C').classList.add('answer-letter');
    document.getElementById('answer-letter-C').classList.remove('wrong-answer-letter');
    document.getElementById('answer-letter-C').classList.remove('correct-answer-letter');

    document.getElementById('answer-D').classList.add('answer');
    document.getElementById('answer-D').classList.remove('wrong-answer');
    document.getElementById('answer-D').classList.remove('correct-answer');
    document.getElementById('answer-letter-D').classList.add('answer-letter');
    document.getElementById('answer-letter-D').classList.remove('wrong-answer-letter');
    document.getElementById('answer-letter-D').classList.remove('correct-answer-letter');
}

function answerA() {
    if (right_answer == 1) {
        document.getElementById('answer-A').classList.remove('answer');
        document.getElementById('answer-A').classList.remove('wrong-answer');
        document.getElementById('answer-A').classList.add('correct-answer');
        document.getElementById('answer-letter-A').classList.remove('answer-letter');
        document.getElementById('answer-letter-A').classList.remove('wrong-answer-letter');
        document.getElementById('answer-letter-A').classList.add('correct-answer-letter');

        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else {
        document.getElementById('answer-A').classList.remove('answer');
        document.getElementById('answer-A').classList.remove('correct-answer');
        document.getElementById('answer-A').classList.add('wrong-answer');
        document.getElementById('answer-letter-A').classList.remove('answer-letter');
        document.getElementById('answer-letter-A').classList.remove('correct-answer-letter');
        document.getElementById('answer-letter-A').classList.add('wrong-answer-letter');
    }
}

function answerB() {
    if (right_answer == 2) {
        document.getElementById('answer-B').classList.remove('answer');
        document.getElementById('answer-B').classList.remove('wrong-answer');
        document.getElementById('answer-B').classList.add('correct-answer');
        document.getElementById('answer-letter-B').classList.remove('answer-letter');
        document.getElementById('answer-letter-B').classList.remove('wrong-answer-letter');
        document.getElementById('answer-letter-B').classList.add('correct-answer-letter');

        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else {
        document.getElementById('answer-B').classList.remove('answer');
        document.getElementById('answer-B').classList.remove('correct-answer');
        document.getElementById('answer-B').classList.add('wrong-answer');
        document.getElementById('answer-letter-B').classList.remove('answer-letter');
        document.getElementById('answer-letter-B').classList.remove('correct-answer-letter');
        document.getElementById('answer-letter-B').classList.add('wrong-answer-letter');
    }
}
function answerC() {
    if (right_answer == 3) {
        document.getElementById('answer-C').classList.remove('answer');
        document.getElementById('answer-C').classList.remove('wrong-answer');
        document.getElementById('answer-C').classList.add('correct-answer');
        document.getElementById('answer-letter-C').classList.remove('answer-letter');
        document.getElementById('answer-letter-C').classList.remove('wrong-answer-letter');
        document.getElementById('answer-letter-C').classList.add('correct-answer-letter');

        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else {
        document.getElementById('answer-C').classList.remove('answer');
        document.getElementById('answer-C').classList.remove('correct-answer');
        document.getElementById('answer-C').classList.add('wrong-answer');
        document.getElementById('answer-letter-C').classList.remove('answer-letter');
        document.getElementById('answer-letter-C').classList.remove('correct-answer-letter');
        document.getElementById('answer-letter-C').classList.add('wrong-answer-letter');

    }
}
function answerD() {
    if (right_answer == 4) {
        document.getElementById('answer-D').classList.remove('answer');
        document.getElementById('answer-D').classList.remove('wrong-answer');
        document.getElementById('answer-D').classList.add('correct-answer');
        document.getElementById('answer-letter-D').classList.remove('answer-letter');
        document.getElementById('answer-letter-D').classList.remove('wrong-answer-letter');
        document.getElementById('answer-letter-D').classList.add('correct-answer-letter');

        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else {
        document.getElementById('answer-D').classList.remove('answer');
        document.getElementById('answer-D').classList.remove('correct-answer');
        document.getElementById('answer-D').classList.add('wrong-answer');
        document.getElementById('answer-letter-D').classList.remove('answer-letter');
        document.getElementById('answer-letter-D').classList.remove('correct-answer-letter');
        document.getElementById('answer-letter-D').classList.add('wrong-answer-letter');
    }
}

function finishQuiz() {
    document.getElementById('questions').classList.add('d-none');
    document.getElementById('quiz-finish').classList.remove('d-none');
    document.getElementById('right-questions').innerHTML = "Richtig Fragen: " + right_answer + "/" + progress;
}

function replay() {
    fullReset = document.getElementById('fullReset');
    fullReset.addEventListener('click', function (e) {
        location.reload();
    }, false);
}