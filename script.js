let questions = [
    {
        "question": "Wer wohnt in der Ananas ganz tief im Meer?",
        "answer_1": "Sephiroth",
        "answer_2": "Spongebob",
        "answer_3": "Dieter Bohlen",
        "answer_4": "Barbie",
        "correct_answer": 2,
    },
    {
        "question": "Wie heißt der Protagonist aus Kingdom Hearts?",
        "answer_1": "Sephiroth",
        "answer_2": "Aladin",
        "answer_3": "Sora",
        "answer_4": "Tabaluga",
        "correct_answer": 3,
    },
    {
        "question": "Welche Prinzessin muß immer wieder von einem Klempner gerettet werden?",
        "answer_1": "Zelda",
        "answer_2": "Peach",
        "answer_3": "Bob",
        "answer_4": "Minnie Maus",
        "correct_answer": 2,
    },
    {
        "question": "Wie macht der Fuchs?",
        "answer_1": "Muuuh",
        "answer_2": "Hüüüh",
        "answer_3": "piep piep",
        "answer_4": "ringdingdingdeding",
        "correct_answer": 4,
    },
    {
        "question": "Was ist Shrek?",
        "answer_1": "Oger",
        "answer_2": "Schwamm",
        "answer_3": "Pfefferkuchenmann",
        "answer_4": "Mensch",
        "correct_answer": 1,
    },
    {
        "question": "Wer ist Marios Bruder?",
        "answer_1": "Sephiroth",
        "answer_2": "Luigi",
        "answer_3": "Dieter Bohlen",
        "answer_4": "Ken",
        "correct_answer": 2,
    },
    {
        "question": "Welche Farbe hat die Maus?",
        "answer_1": "grau",
        "answer_2": "blau",
        "answer_3": "orange",
        "answer_4": "blass blau kariert",
        "correct_answer": 3,
    },
    {
        "question": "Wie heißt der Vater von Tabaluga?",
        "answer_1": "Sephiroth",
        "answer_2": "Midir",
        "answer_3": "Klaus Dieter",
        "answer_4": "Thyrion",
        "correct_answer": 4,
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let Audio_Success = new Audio('Audio/success.mp3');
let Audio_Fail = new Audio('Audio/fail.mp3');

function init(){
  document.getElementById('questionAmount').innerHTML= questions.length;
  showQuestion();
}

function showQuestion(){
   
   if (currentQuestion>=questions.length){

document.getElementById('endScreen').style='';
document.getElementById('quiz-body').style='display: none;';
document.getElementById('amount-of-questions').innerHTML= questions.length;
document.getElementById('amount-of-right-questions').innerHTML= rightQuestions;
document.getElementById('header-img').src = './img/winner-3190947_1280.jpg';
   }else{
    let question = questions[currentQuestion];
    let percent= (currentQuestion +1) / questions.length;
    percent = Math.round(percent *100);
document.getElementById('progress-bar').innerHTML = `${percent}%`;
document.getElementById('progress-bar').style = `width:${percent}%;`;
document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
document.getElementById('question-text').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML= question['answer_1'];
document.getElementById('answer_2').innerHTML= question['answer_2'];
document.getElementById('answer_3').innerHTML= question['answer_3'];
document.getElementById('answer_4').innerHTML= question['answer_4'];
   };
    
}

function answer(selection){
    let question = questions[currentQuestion];
    // console.log('selected answer is', selection);
    let selectedQuestionNumber= selection.slice(-1);
    // console.log('selectedQuestionNumber is',selectedQuestionNumber);
    // console.log('Current Question is', question['correct_answer']);
let idOfCorrectAnswer =`answer_${question['correct_answer']}` ; 
    if (selectedQuestionNumber == question['correct_answer']){
        console.log('Richtig :)');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        Audio_Success.play();
        rightQuestions++;
    }else{
        console.log('leider Falsch :(');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfCorrectAnswer).parentNode.classList.add('bg-success');
        Audio_Fail.play();
    }

    document.getElementById('next-button').disabled=false;
}

function nextQuestion(){
currentQuestion++;
document.getElementById('next-button').disabled=true;
resetAnswers();
showQuestion();

}

function resetAnswers(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function newGame(){
    document.getElementById('header-img').src = './img/question-mark.jpg';
    document.getElementById('quiz-body').style='';
    document.getElementById('endScreen').style='display: none;';
  
   rightQuestions = 0;
   currentQuestion = 0;
   init();
}