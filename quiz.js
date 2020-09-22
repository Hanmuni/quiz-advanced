let allQuestions;

let right_answer = 0;
let right_questions_answered = 0;
let lastSelectedAnswer = 0;
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
        progress = Math.round((new_question / allQuestions.length) * 100);

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

    if (right_answer == lastSelectedAnswer) { // Right answer selected
        right_questions_answered++;  //
    }
}

function hideElements() {
    document.getElementById('next-btn').classList.add('d-none');

    hideElementsForQuestion(1);
    hideElementsForQuestion(2);
    hideElementsForQuestion(3);
    hideElementsForQuestion(4);

}

function hideElementsForQuestion(selectedAnswer) {
    document.getElementById('answer-' + selectedAnswer).classList.add('answer');
    document.getElementById('answer-' + selectedAnswer).classList.remove('wrong-answer');
    document.getElementById('answer-' + selectedAnswer).classList.remove('correct-answer');
    document.getElementById('answer-letter-' + selectedAnswer).classList.add('answer-letter');
    document.getElementById('answer-letter-' + selectedAnswer).classList.remove('wrong-answer-letter');
    document.getElementById('answer-letter-' + selectedAnswer).classList.remove('correct-answer-letter');
}

/**
 * 
 * @param {numbre} selectedAnswer can be 1, 2, 3 or 4 
 */
function answer(selectedAnswer) {
    lastSelectedAnswer = selectedAnswer;

    if (right_answer == selectedAnswer) { // Right answer selected
        document.getElementById('answer-' + selectedAnswer).classList.add('correct-answer');
        document.getElementById('answer-' + selectedAnswer).classList.remove('answer');
        document.getElementById('answer-' + selectedAnswer).classList.remove('wrong-answer');
        document.getElementById('answer-letter-' + selectedAnswer).classList.add('correct-answer-letter');
        document.getElementById('answer-letter-' + selectedAnswer).classList.remove('answer-letter');
        document.getElementById('answer-letter-' + selectedAnswer).classList.remove('wrong-answer-letter');




        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else { // Wrong answer selected
        document.getElementById('answer-' + selectedAnswer).classList.add('wrong-answer');
        document.getElementById('answer-' + selectedAnswer).classList.remove('answer');
        document.getElementById('answer-' + selectedAnswer).classList.remove('correct-answer');
        document.getElementById('answer-letter-' + selectedAnswer).classList.add('wrong-answer-letter');
        document.getElementById('answer-letter-' + selectedAnswer).classList.remove('answer-letter');
        document.getElementById('answer-letter-' + selectedAnswer).classList.remove('correct-answer-letter');
    }
}

function finishQuiz() {
    document.getElementById('questions').classList.add('d-none');
    document.getElementById('quiz-finish').classList.remove('d-none');
    document.getElementById('right-questions').innerHTML = "Richtige Fragen: " + right_questions_answered + "/" + allQuestions.length;
}

function replay() {

    document.getElementById('quiz-finish').classList.add('d-none');
    document.getElementById('greeting').classList.remove('d-none');

    right_answer = 0;
    right_questions_answered = 0;
    lastSelectedAnswer = 0;
    new_question = 0;
    progress = 0;

    resetButton(1);
    resetButton(2);
    resetButton(3);
    resetButton(4);

    // location.reload();
}

function resetButton(id) {
    document.getElementById('answer-' + id).classList.add('answer');
    document.getElementById('answer-' + id).classList.remove('wrong-answer');
    document.getElementById('answer-' + id).classList.remove('correct-answer');
    document.getElementById('answer-letter-' + id).classList.add('answer-letter');
    document.getElementById('answer-letter-' + id).classList.remove('correct-answer-letter');
    document.getElementById('answer-letter-' + id).classList.remove('wrong-answer-letter');
}