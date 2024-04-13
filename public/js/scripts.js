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

//Quiz

const inputAnswers = document.querySelectorAll(".answer");
//selects all 6 radio inputs
// console.log(inputAnswer, inputAnswer.length); 

//To keep score
let score = 0;

//To score each answer. Yes => +1 and No => +0
const calculateAnswers = function () {
  //reset score for each input selected so it's not adding on to the previous one.
  score = 0;
  //for loop to score input that user selects based on if it's yes or no
  for (let i = 0; i < inputAnswers.length; i++) {
    if (inputAnswers[i].checked && inputAnswers[i].value === "yes") {
      console.log(inputAnswers[i].value);
      score += 1;
    } else if (inputAnswers[i].checked && inputAnswers[i].value === "no") {
      console.log(inputAnswers[i].value);
      score;
    }
  }
  console.log(`The final score is ${score}.`);
};

//for each loop to add event listener to selected input choice
inputAnswers.forEach((inputAnswers) => {
  inputAnswers.addEventListener("click", calculateAnswers);
});

//Submit Button
const submitBtn = document.querySelector(".btn");
let message = document.querySelector("#quiz-results");

const getFinalResult = function () {
  if (score >= 2) {
    message.textContent = "This is exactly where you need to be! Welcome!";
  } else if (0 <= score < 2) {
    message.textContent =
      "Sorry, this website will not benefit you. But feel free to look around anyways!";
  } else {
    console.warn("Quiz is not working!");
  }
};

submitBtn.addEventListener("click", getFinalResult);

//Clear Button
const clearBtn = document.querySelector(".clear-btn");

const resetBtn = function () {
  score = 0;
  console.log("The score has been reset.");
  document.querySelector(".form").reset(); //to clear form
  document.querySelector("#quiz-results").textContent = ""; //clear decision from page
};

clearBtn.addEventListener("click", resetBtn);
