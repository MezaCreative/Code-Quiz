
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
var timerTime = document.getElementById("time");
var timeLeft = 70;
var questionCounter = 0;
const myQuestions = [
    {
        question:" Who invented Javascript?",
        answers: {
            a:"Mitchell Backer",
            b:"Brendan Eich",
            c:"John Resig",
            d:"Douglas Crockford"
        },
        correctAnswer: "b"
    },
    {
        question:"Commonly used data types DO NOT include:",
        answers: {
            a:"strings",
            b:"booleans",
            c:"alerts",
            d:"numbers"
        },
        correctAnswer: "c"  
    },
    {
        question:" String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a:"commas",
            b:"curly brackets",
            c:"quotes",
            d:"parentheses"
        },
        correctAnswer: "c"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a:"JavaScript",
            b:"terminal / bash",
            c:"for loops",
            d:"console.log"
        },
        correctAnswer: "a"
    },
    {
        question:"Arrays in JavaScript can be used to store ____.",
        answers: {
            a:"numbers and strings",
            b:"other arrays",
            c:"booleans",
            d:"all of the above"
        },
        correctAnswer: "d"
    }
    
]

//timer
function clockdown() {
    const timeInterval = setInterval(function() {
    timeLeft --;
    timerTime.textContent = "Time left: " + timeLeft;
    if (timeLeft === 0) {
        window.location.href = "highscore.html"
    }
    }, 1000);

}

// start quiz
function buildQuiz(){
    clockdown();
    //variable to store the HTML output
    const output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            const answers = [];

            //variable for each available answer
            for (letter in currentQuestion.answers) {
            
                
                // add HTML  button
                answers.push(
                `<label>
                    <input type="button" id="button${letter}" name="question${questionNumber}" value="${letter}">
                         : ${currentQuestion.answers[letter]}
                </label>` 
                );
            }

        //add the question and its answer to the output
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
        }
    );
    // comine output list into one html string to be printed to the page
    quizContainer.innerHTML = output.join('');
}

//fuction chooseAnswer(n){
//    button[n].addEventListener("click", showNextSlide);
//}

function gradeAnswer(){
    // retreives answer container for quiz
    const answerContatiner = quizContainer.querySelectorAll('.answers');


    // for each question
 
        // needs this question

        // retrives selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            timerTime.textContent = timeLeft + 10;
            //add time
            answersContainer[questionNumber].style.color = 'lightgreen';
        }
        //if answer is wrong
        else {
            timerTime.textContent = timeLeft - 10;
            //color answer red
            //subtract time
            answerContainers[questionNumber].style.color = 'red';
        }

    
        questionCounter ++;
}

function showSlide (n) {
    
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    

    if (currentSlide === slides.length - 1 ) {
       // answers.addEventListener("click", fucntion( ) 
            buttona.addEventListener("click", function( )
            {
                window.location.href = "highscore.html"
            })
            buttonb.addEventListener("click", function( )
            {
                window.location.href = "highscore.html"
            })
            buttonc.addEventListener("click", function( )
            {
                window.location.href = "highscore.html"
            })
            buttond.addEventListener("click", function( )
            {
                window.location.href = "highscore.html"
            })
        //on click does this
    }
    
}
function showNextSlide() {
    showSlide(currentSlide + 1);
}

// displays the quiz
buildQuiz();

//pagination
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const buttona = document.getElementById("buttona");
const buttonb = document.getElementById("buttonb");
const buttonc = document.getElementById("buttonc");
const buttond = document.getElementById("buttond");

//first slide
showSlide(currentSlide);

buttona.addEventListener("click", showNextSlide);
buttonb.addEventListener("click", showNextSlide);
buttonc.addEventListener("click", showNextSlide);
buttond.addEventListener("click", showNextSlide);
// on submit, show results
//quizContainer.addEventListener("click", showNextSlide)
//submitButton.addEventListener('click, showResults');






