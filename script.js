//PSEUDOCODE: i want to create 3 buttons and a div for the question. each button has an answer. when a button is clicked
//a variable is set to that position in the array of values, [0],[1] or [2]. the choice is then checked against the answer's value.
//if the button clicked and the answer's value match then it is correct, otherwise it is incorrect. if correct score++,
//otherwise score--. 

var questions = [
    {
        "question": "Three foundational languages of web development are:",
        "choices": ["HTML and CSS", "HTML and Java", "HTML, CSS and JavaScript"],
        "answer": "HTML, CSS and JavaScript"
    },

    {
        question: "DOM stands for:",
        choices: ["Favorite type of pizza", "Document Origin Margin", "Document Object Model"],
        answer: "Document Object Model"
    },

    {
        question: "Bootstrap is made by:",
        choices: ["Google", "Twitter", "Facebook"],
        answer: "Twitter"

    },

    {
        question: "A CDN stands for:",
        choices: ["Character Domain Name", "Cartoon Delivery Network", "Content Delivery Network"],
        answer: "Content Delivery Network"
    },

    {
        question: "=== evaluates:",
        choices: ["Value", "Value and Type", "Value, Type and Character "],
        answer: "Value and Type"
    }
];

//variables

var currentQuestion = 0; //initalized
var choiceNumber = null; //initialized 

//functions 
function checkAnswer(choiceNumber) {

    alert(questions[currentQuestion].choices[choiceNumber] + " " + questions[currentQuestion].answer); //test
    if (questions[currentQuestion].choices[choiceNumber] == questions[currentQuestion].answer) {
        alert("correct!");
    }
    else { alert("incorrect!"); }
}



//should build a foor loop that goes through the objects in the array as answers are provided
while (currentQuestion <= questions.length) {
    //question
    document.getElementById("main").textContent = (questions[currentQuestion].question);

    //possible answers
    document.getElementById("btn0").innerText = (questions[currentQuestion].choices[0]);
    document.getElementById("btn0").addEventListener("click", () => {
        var choiceNumber = 0;
        checkAnswer(choiceNumber);
        alert("choice number is: " + choiceNumber)
    });
    document.getElementById("btn1").innerText = (questions[currentQuestion].choices[1]);
    document.getElementById("btn1").addEventListener("click", () => {
        var choiceNumber = 1;
        checkAnswer(choiceNumber);
        alert("choice number is: " + choiceNumber)
    });
    document.getElementById("btn2").innerText = (questions[currentQuestion].choices[2]);
    document.getElementById("btn2").addEventListener("click", () => {
        var choiceNumber = 2;
        checkAnswer(choiceNumber);
        alert("choice number is: " + choiceNumber)
        currentQuestion++;
    });
    // document.getElementById("btn2").addEventListener("click", checkAnswer);
}


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