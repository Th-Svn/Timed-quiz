// getting all required elements 
const start_btn = document.querySelector(".start_btn");
const quiz_box = document.querySelector(".quiz_box");


//If Start Quiz Button Clicked
start_btn.onclick("Start Quiz"); {
    quiz_box.classList.add("activeQuiz");
}

var counter = 75
var countdown = function( ){
   console.log(counter);
   counter- -;
      if(counter = = = 0){
        console.log(“Time Off”);
        clearInterval(startCountdown);
      };
 };

 //creating an array and passing the number, questions, options, and answers
 let questions = [
     {
         numb: 1,
         question: "Which of these values is NOT considered false?",
         answer: ""0"",
         options:[
             "0",
             ""0"",
             "null",
             " ",
         ]
     },
 ]
