
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question:" ?",
        answers: {
            a:"A",
            b:" B",
            c:"C ",
            d:"D "
        },
        correctAnswer: "a"
    },
    {
        question:" ?",
        answers: {
            a:"A",
            b:"B ",
            c:"C ",
            d:" D"
        },
        correctAnswer: "a"  
    },
    {
        question:" ?",
        answers: {
            a:"",
            b:" ",
            c:" ",
            d:" "
        },
        correctAnswer: "a"
    },
    {
        question:" ?",
        answers: {
            a:"",
            b:" ",
            c:" ",
            d:" "
        },
        correctAnswer: "a"
    },
    {
        question:" ?",
        answers: {
            a:"",
            b:" ",
            c:" ",
            d:" "
        },
        correctAnswer: "a"
    },
    {
        question:" ?",
        answers: {
            a:"",
            b:" ",
            c:" ",
            d:" "
        },
        correctAnswer: "a"
    },
    {
        question:" ?",
        answers: {
            a:"",
            b:" ",
            c:" ",
            d:" "
        },
        correctAnswer: "a"
    }
]


// start quiz
function buildQuiz(){
    //variable to store the HTML output
    const output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            const answers = [];

            //variable for each available answer
            for (letter in currentQuestion.answers) {
            
                
                // add HTML radio button
                answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value = "${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    
                </label>` );
            }

        //add the question and its answer to the output
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join(' ')} </div>`
        );
        }
    );
    // comine output list into one html string to be printed to the page
    quizContainer.innerHTML = output.join('');
    
    
}


function showResults(){}

// displays the quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click, showResults');






