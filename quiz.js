function showQuestions() {
    document.getElementById('greeting').classList.add('d-none');
    document.getElementById('questions').classList.remove('d-none');
    
    document.getElementById('question').innerHTML = 'Welches ist das größte Fußballstadion in Europa?';
    document.getElementById('answer1').innerHTML =  'Camp Nou in Barcelona';
    document.getElementById('answer2').innerHTML =  'Allianz Arena in München';
    document.getElementById('answer3').innerHTML =  'Wembley-Stadion in London';
    document.getElementById('answer4').innerHTML =  'Parc des Princes in Paris';
}

function AnswerA() {
    document.getElementById('answer-A').classList.add('correct-answer');
    document.getElementById('answer-A').classList.remove('answer');
    document.getElementById('answer-letter-A').classList.add('correct-answer-letter');
    document.getElementById('answer-letter-A').classList.remove('answer-letter');
}

function AnswerB() {
    document.getElementById('answer-B').classList.add('wrong-answer');
    document.getElementById('answer-B').classList.remove('answer');
    document.getElementById('answer-letter-B').classList.add('wrong-answer-letter');
    document.getElementById('answer-letter-B').classList.remove('answer-letter');
}

function AnswerC() {
    document.getElementById('answer-C').classList.add('wrong-answer');
    document.getElementById('answer-C').classList.remove('answer');
    document.getElementById('answer-letter-C').classList.add('wrong-answer-letter');
    document.getElementById('answer-letter-C').classList.remove('answer-letter');
}

function AnswerD() {
    document.getElementById('answer-D').classList.add('wrong-answer');
    document.getElementById('answer-D').classList.remove('answer');
    document.getElementById('answer-letter-D').classList.add('wrong-answer-letter');
    document.getElementById('answer-letter-D').classList.remove('answer-letter');
}

