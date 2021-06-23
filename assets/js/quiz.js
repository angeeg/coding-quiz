var questionArray = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed with __________.",
    "Arrays in JavaScript can be used to store __________.",
    "String values must be enclosed within __________ when being assigned to variables.",
    "A very useful took used during development and debugging for printing content to the debugger is:"
]
var correctAnswers = [
    "3", "2", "4", "3", "4"
]
var answerone = [
    "strings",
    "booleans",
    "alerts",
    "numbers"
]

var answertwo = [
    "quotes",
    "curly brackets",
    "paranthesis",
    "square brackets"
]

var answerthree = [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above"
]

var answerfour = [
    "commas",
    "curly brackets",
    "quotes",
    "paranthesis"
]

var answerfive = [
    "JavaScript",
    "terminal/bash",
    "for loops",
    "console.log"
]
var index = 0;
var questionEl = document.getElementById("question");
var sectionEl = document.getElementById("question-section");
var answeroneEl = document.getElementById("ans_one");
var answertwoEl = document.getElementById("ans_two");
var answerthreeEl = document.getElementById("ans_three");
var answerfourEl = document.getElementById("ans_four");
var timer;
var time = 75;
var timerEl = document.getElementById("timerEl");
var welcomeEl = document.getElementById("welcome");

var startQuiz = function () {
    timerEl.textContent = time
    timer = setInterval(function () {
        time = time - 1
        timerEl.textContent = time
        if (time <= 0 ) {
            endQuiz()
        }
    }, 1000)
    sectionEl.classList.remove("hide");
    welcomeEl.classList.add("hide");
    addQuestions()
}
function addQuestions() {
    var currentAnswer;

    if (index === 0) {
        currentAnswer = answerone
    } else if (index === 1) {
        currentAnswer = answertwo
    }
    // add else if for index 2 and index 3 and index 4 
    else if (index === 2) {
        currentAnswer = answerthree
    }
    else if (index === 3) {
        currentAnswer = answerfour
    }
    else if (index === 4) {
        currentAnswer = answerfour
    }


    questionEl.textContent = questionArray[index];
    answeroneEl.textContent = "1. " + currentAnswer[0];
    answertwoEl.textContent = "2. " + currentAnswer[1];
    answerthreeEl.textContent = "3. " + currentAnswer[2];
    answerfourEl.textContent = "4. " + currentAnswer[3];

    Array.from(document.getElementsByClassName("answer")).forEach(function (btn) {
        console.log(btn);
        btn.onclick = checkAnswer;
    
    
    })
}


function checkAnswer(event) {
    var choice = (event.target.textContent[0]);
    if (choice !== correctAnswers[index]) {
        time = time - 10
        timerEl.textContent = time
        document.getElementById("wrongCorrectAnswer").textContent = "Wrong!"
    }
    else  {
        document.getElementById("wrongCorrectAnswer").textContent = "Correct!"
    }
  

    index = index + 1

    if (index < questionArray.length) {
        addQuestions()
    }

    else {
        endQuiz();
        document.getElementById("wrongCorrectAnswer").textContent = " ";
    }

  
}
var endQuiz = function () {
    console.log("hello")
    document.getElementById("gameOver").classList.remove("hide");
    sectionEl.classList.add("hide");
    clearInterval(timer)
    
    
    var userName = document.createElement("input")
    userName.setAttribute("type", "text")
    userName.setAttribute("id", "initials")
    document.getElementById("gameOver").appendChild(userName)
    var btn = document.createElement("button")
    btn.textContent = "Submit"
    btn.onclick = getHighScore
    document.getElementById("gameOver").appendChild(btn)
}

var getHighScore = function(){
    var timeRemaining = timerEl.textContent 
    var quizScore = timeRemaining
    var userName = document.getElementById("initials").value
    var storage = JSON.parse(localStorage.getItem("highscore")) || []
    storage.push(userName + " " + quizScore)
    localStorage.setItem("highscore", JSON.stringify(storage))
    var btn = document.createElement("button")
    btn.textContent = "Try Again"
    btn.onclick = restartQuiz
    document.getElementById("gameOver").appendChild(btn)
}
var restartQuiz = function(){
    time = 75
    index = 0 
    startQuiz()
}
var buttonEl = document.querySelector(".start");

buttonEl.addEventListener("click", startQuiz);




