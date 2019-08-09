const MyTriviaQuestions = [{
    question: "What color are apples?",
    options: {a: 'Red/Green', b: "Grey", c: "White", d: "rebecca purple"},
    correctAnswer: "a"
},

{
    question: "The sandwich known as the 'Reuben' does not have which of the following ingredients?",
    options: {a: "boiled ham", b: "corned Beef", c: "sauerkraut", d: "Swiss Cheese"},
    correctAnswer: "a"
},

{
    question: "Marzipan is made with what kind of nut?",
    options: {a: "cashew", b: "almond", c: "pecan", d: "walnut"},
    correctAnswer: "b"
},

{
    question: "In the United States, about how much beer does the average person drink each year?",
    options: {a: "24 ounces", b: "24 pints", c: "24 quarts", d: "24 gallons"},
    correctAnswer: "d"
}];


let counter = 30;
let currentQuestion = 0;
let score = 0;
let wrong = 0;
let timer;


//==============TIMER======================
i = 40;
function onTimer(){
   document.getElementById("time").innerHTML = "<h3>You have " + i + " seconds</h3>";
   i--;
   if(i < 0) {
       document.getElementById("time").innerHTML = "<h3>You have run out of time!</h3";
       alert("Test is Over!")
       triviaForm.style.display = 'none';
   }else {
       setTimeout(onTimer, 1000);
   }
}


const TriviaQuestions = document.getElementById('quiz');
const correctAnswer = document.getElementById('results');
const submitButton = document.getElementById('submit');

generateQuiz(MyTriviaQuestions, TriviaQuestions, correctAnswer, submitButton);

onTimer()
function generateQuiz(questions, TriviaQuestions, correctAnswer, submitButton){

    function showQuestions(questions, TriviaQuestions){
        let quizQuestions = [];
        let options;

    
        for(let i=0; i<questions.length; i++){
            
        
            options = [];

        
            for(letter in questions[i].options){

             
                options.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].options[letter]
                    + '</label>'
                );
            }

            quizQuestions.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="options">' + options.join('') + '</div>'
            );
        }

        TriviaQuestions.innerHTML = quizQuestions.join('');
    }


    function showResults(questions, TriviaQuestions, correctAnswer){
        
        let answerContainers = TriviaQuestions.querySelectorAll('.options');
        
        let userAnswer = '';
        let numCorrect = 0;
        
        for(let i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
               answerContainers[i].style.color = 'green';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        correctAnswer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, TriviaQuestions);
    
    submitButton.onclick = function(){
        showResults(questions, TriviaQuestions, correctAnswer);
    }

}