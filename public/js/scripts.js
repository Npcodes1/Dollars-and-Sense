// alert("This is working!");

// To add current year to copyright.
let currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `Copyright &copy; Nicole Payne ${currentYear}. All Rights Reserved.`;

//Pie Chart using chart.js
const pieChart = document.querySelector("#pieChart");

new Chart(pieChart, {
    type: "pie",
    data: {
    labels: ["66% Caucasian", "14% Hispanic", "11% Asian American", "9% African American"],
    datasets: [
        {
        label: "Demographic percentages for first-time home buyers",
        backgroundColor: ["#f1c40f", "#e67e22", "#399B53", "#023B58"],
        data: [66, 14, 11, 9]
        }
    ],
    }
});

// Quiz results
// To storing the value of if yes or no was checked into variables.
    // Question 1
    // let question1Yes = document.getElementById("question1-yes");
    // let question1No = document.getElementById("question1-no");

    // // Question 2
    // let question2Yes = document.getElementById("question2-yes");
    // let question2No = document.getElementById("question2-no");

    // // Question 3
    // let question3Yes = document.getElementById("question3-yes");
    // let question3No = document.getElementById("question3-no");

  

// To create a score based on the answers clicked in the questions. Yes = +1 No = 0
// function answeredQuestions() {
//     // //if clicked yes, add 1 to score
//     if (question1Yes.checked || question2Yes.checked || question3Yes.checked) {
//         score = score + 1;
//         console.log(score);
//       //if clicked no, score remains unchanged
//     } else if (question1No.checked || question2No.checked || question3No.checked) {
//         score = score + 0;
//         console.log(score);
//     } else {
//         console.warn("Something went wrong!");
//     };
//     return score;
// };

// // Shows final answer once button is clicked.
// function getFinalResult() {
//     //Display result on page based on calculated score
//      if (score < 2) {
//         confirm(`This is not the site for you! Sorry!`);
//         console.log(`This is not the site for you! Sorry!`);
//     } else if (score >= 2) { 
//         confirm(`This is the site for you! Welcome!`);
//         console.log(`This is the site for you! Welcome!`);
//     } else {
//         console.warn("There\'s a problem with this quiz!"); 
//     }
//     return;
// };


//Quiz Take 2

const inputAnswers = document.querySelectorAll(".answer"); 
// console.log(inputAnswer, inputAnswer.length); //selects all 6 radio inputs

//To keep score
let score = 0;

//To calculate score

const calculateAnswers = function() {
    //variable to store selected radio input
  for (let i = 0; i < inputAnswers.length; i++) {
    if (inputAnswers[i].checked === inputAnswers[i].value) {
      // console.log(inputAnswers[i].value);
      score++;
      console.log(score);
  } else {
      console.log(score);
  }
  }
  
};


//for each loop to add event listener to selected input choice
    // marking that it's been selected
inputAnswers.forEach(inputAnswers => {
    inputAnswers.addEventListener("click", calculateAnswers);
});
  
  
//submit function
const submitBtn = document.querySelector(".btn");
let message = document.querySelector("#quiz-results");

const getFinalResult = function() {
    switch(score) {
    case 0 <= score < 2:
        message.textContent = "Sorry, this site will not benefit you."
        break;
    case score >= 2:
        message.textContent = "This is exactly where you need to be! Welcome!"
    default:
        console.warn("Quiz is not working!");
    }
    submitBtn.removeEventListener("click", getFinalResult);
}

submitBtn.addEventListener("click", getFinalResult);