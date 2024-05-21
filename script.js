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

let currentQuestion = 0;

function init(){
  document.getElementById('questionAmount').innerHTML= questions.length;
  showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
document.getElementById('question-text').innerHTML= question['question'];
document.getElementById('answer_1').innerHTML= question['answer_1'];
document.getElementById('answer_2').innerHTML= question['answer_2'];
document.getElementById('answer_3').innerHTML= question['answer_3'];
document.getElementById('answer_4').innerHTML= question['answer_4'];

}