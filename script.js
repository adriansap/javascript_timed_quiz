

var questions = [
    {
        question: "Three foundational languages of web development are:",
        "choices": ["HTML and CSS", "HTML and Java", "HTML, CSS and JavaScript"],
        "answer": "HTML, CSS and JavaScript"
    },

    {
        question: "DOM stands for:",
        choices: ["Favorite type of pizza", "Document Origin Margin", "Document Object Model"],
        answer: "Document Object Model"
    }

];

//functions 
function checkAnswer() {
    if (questions[0].choices[0] == questions[0].answer) {
        alert("correct!");
    }
    else { alert("incorrect!"); }
}

//should build a foor loop that goes through the objects in the array as answers are provided

//question
document.getElementById("main").textContent = (questions[0].question);
//possible answers
document.getElementById("btn1").innerText = (questions[0].choices[0]);
document.getElementById("btn1").addEventListener("click", checkAnswer()); // to check against questions.answer
document.getElementById("btn2").innerText = (questions[0].choices[1]);
document.getElementById("btn3").innerText = (questions[0].choices[2]);



// timer

var timerEl = document.getElementById("timer");

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
        }

    }, 1000); // the timer goes on indefinitely, that's why when secondsLeft == 0 then clearInterval(timerInterval);
    //shuts the timer, and then, in this case, function sendMessage(); is executed.
}