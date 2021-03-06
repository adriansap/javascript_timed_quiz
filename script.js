//PSEUDOCODE: i want to create 3 buttons and a div for the question. each button has an answer. when a button is clicked
//a variable is set to that position in the array of values, [0],[1] or [2]. the choice is then checked against the answer's value.
//if the button clicked and the answer's value match then it is correct, otherwise it is incorrect. if correct score++,
//otherwise score--. 
function hideClearScores() {
    document.getElementById("clear-scores").style.display = "none";
    document.getElementById("start-again").style.display = "none";

}
hideClearScores();

var questions = [
    {
        "question": "Three foundational languages of web development are:",
        "choices": ["HTML and CSS", "HTML and Java", "HTML, CSS and JavaScript"],
        "answer": "HTML, CSS and JavaScript"
    },

    {
        "question": "DOM stands for:",
        "choices": ["Favorite type of pizza", "Document Origin Margin", "Document Object Model"],
        "answer": "Document Object Model"
    },

    {
        "question": "Bootstrap is made by:",
        "choices": ["Google", "Twitter", "Facebook"],
        "answer": "Twitter"

    },

    {
        "question": "A CDN stands for:",
        "choices": ["Character Domain Name", "Cartoon Delivery Network", "Content Delivery Network"],
        "answer": "Content Delivery Network"
    },

    {
        "question": "=== evaluates:",
        "choices": ["Value", "Value and Type", "Value, Type and Character "],
        "answer": "Value and Type"
    },
    {
        "question": "If you run an eventListener method inside of a function, you may:",
        "choices": ["Get free pizza", "Cause the eventListener to trigger it's associated function", "overload your RAM "],
        "answer": "Cause the eventListener to trigger it's associated function"
    },
    {
        "question": "To use Jquery",
        "choices": ["You must have a good browser", "You must include it's script url in the head section", "You must have javascript"],
        "answer": "You must include it's script url in the head section"
    },
    {
        "question": "To listen for a click with Jquery you type:",
        "choices": ["'$('#idname').on('click', function)'", "addEventListener('click', function)", "createElement('click', function)"],
        "answer": "'$('#idname').on('click', function)'"
    },
    {
        "question": "To generate a random number between 1 and 10:",
        "choices": ["Math.floor(math.random()*10) +1", "Math.floor(math.random()*10)", "Math.floor(math.random()*11)"],
        "answer": "Math.floor(math.random()*10) +1"
    },
    {
        "question": "To add an HTML element via Javascript the last step includes:",
        "choices": [".method", ".appendChild", ".addChild"],
        "answer": ".appendChild"
    },
    {
        "question": "All done!",
        "choices": ["Thanks", "for", "playing!"],
        "answer": "'$('#idname').on('click', function)'"
    },
];

//variables

var currentQuestion = 0; //initalized
var choiceNumber = 0; //initialized 
var userScore = 0; //init
var userInitials;
var newHighScore;

//functions 
function checkAnswer(choiceNumber) {
    if (questions[currentQuestion].choices[choiceNumber] == questions[currentQuestion].answer) {
        // alert(questions[currentQuestion].choices[choiceNumber] + " " + questions[currentQuestion].answer); //test
        // alert("correct!");
        document.getElementById("correct-or-not").textContent = "correct!";
        userScore++;
        updateScore(userScore);
        // currentQuestion++;
        console.log("question number: " + currentQuestion)
        choiceNumber = 0; //reset for next question
        checkIfEnd();

    }
    else if (questions[currentQuestion].choices[choiceNumber] != questions[currentQuestion].answer) {
        // alert(questions[currentQuestion].choices[choiceNumber] + " " + questions[currentQuestion].answer); //test

        // alert("incorrect!");
        document.getElementById("correct-or-not").textContent = "incorrect!";
        userScore--;
        updateScore(userScore);
        // currentQuestion++;
        console.log("question number: " + currentQuestion)

        choiceNumber = 0; //reset for next question
        //penalize 
        secondsLeft -= 5;


        checkIfEnd();


    }

}

function checkIfEnd() {
    if (questions[currentQuestion].answer == ".appendChild") { //it's the end of the quiz
        userInitials = prompt("Please type your initials");
        var uIArray = [];
        uIArray.push(userInitials);
        //handle high scores:
        var objHighScore = {
            username: uIArray,
            score: userScore
        }
        objHighScore_serialized = JSON.stringify(objHighScore);

        // newHighScore = newHighScore + "," + userInitials + ":" + userScore;
        localStorage.setItem("highscores", objHighScore_serialized);
        // localStorage.setItem("userScore", userScore);

        document.getElementById("user-initials").innerHTML = userInitials + " " + userScore;


        // secondsLeft = 0;
        document.getElementById("btn0").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("timer").style.display = "none";
        document.getElementById("begin-quiz").style.display = "none";
        document.getElementById("user-score").style.display = "none";
        document.getElementById("correct-or-not").style.display = "none";

        var localScore = localStorage.getItem(userScore);
        document.getElementById("userHigh").textContent = localScore;
        document.getElementById("userHigh").style.backgroundColor = "purple";
        document.getElementById("userHigh").style.color = "white";
        document.getElementById("clear-scores").style.display = "block"; //reveal clear scores button
        document.getElementById("start-again").style.display = "block"; //not working??
    }
}

//eventlistener for Clear Scores button and Start again button
document.getElementById("clear-scores").addEventListener("click", clearTheScores);
document.getElementById("start-again").addEventListener("click", kickOff);

function clearTheScores() {
    document.getElementById("user-initials").style.display = "none";
    localStorage.clear(); //clear  from local storage.


}
function updateScore(userScore, currentQuestion) {
    document.getElementById("user-score").textContent = userScore;
}

document.getElementById("btn0").addEventListener("click", () => {
    choiceNumber = 0;
    checkAnswer(choiceNumber);
    // alert("choice number is: " + choiceNumber);
    currentQuestion++;
    QandA(currentQuestion);
});

document.getElementById("btn1").addEventListener("click", () => {
    choiceNumber = 1;
    checkAnswer(choiceNumber);
    // alert("choice number is: " + choiceNumber);
    currentQuestion++;
    QandA(currentQuestion);
});

document.getElementById("btn2").addEventListener("click", () => {
    choiceNumber = 2;
    checkAnswer(choiceNumber);
    // alert("choice number is: " + choiceNumber);
    currentQuestion++;
    QandA(currentQuestion);
});

function QandA() {
    //question
    document.getElementById("main").textContent = (questions[currentQuestion].question);

    //possible answers
    document.getElementById("btn0").innerText = (questions[currentQuestion].choices[0]);
    document.getElementById("btn1").innerText = (questions[currentQuestion].choices[1]);
    document.getElementById("btn2").innerText = (questions[currentQuestion].choices[2]);
}

//begin quiz event listener
document.getElementById("begin-quiz").addEventListener("click", kickOff);


//function kickOff()

function kickOff() {
    QandA();
    setTime();
    document.getElementById("begin-quiz").style.display = "none";
    document.getElementById("userHigh").style.display = "block";
    document.getElementById("btn0").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "block";


}

// timer

var timerEl = document.getElementById("timer");

var secondsLeft = 120;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000); // the timer goes on indefinitely, that's why when secondsLeft == 0 then clearInterval(timerInterval);
    //shuts the timer
}