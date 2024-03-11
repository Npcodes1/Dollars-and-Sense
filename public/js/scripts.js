// alert("This is working!");

// To add current year to copyright.
let currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `Copyright &copy; Nicole Payne ${currentYear}. All Rights Reserved.`;

// Quiz results
// To storing the value of if yes or no was checked into variables.
    // Question 1
    let question1Yes = document.getElementById("question1-yes");
    let question1No = document.getElementById("question1-no");

    // Question 2
    let question2Yes = document.getElementById("question2-yes");
    let question2No = document.getElementById("question2-no");

    // Question 3
    let question3Yes = document.getElementById("question3-yes");
    let question3No = document.getElementById("question3-no");

    //To keep score
    let score = 0;

// To create a score based on the answers clicked in the questions. Yes = +1 No = 0
function answeredQuestions() {
    // //if clicked yes, add 1 to score
    if (question1Yes.checked || question2Yes.checked || question3Yes.checked) {
        score = score + 1;
        console.log(score);
      //if clicked no, score remains unchanged
    } else if (question1No.checked || question2No.checked || question3No.checked) {
        score = score + 0;
        console.log(score);
    } else {
        console.warn("Something went wrong!");
    };
    return score;
};

// Shows final answer once button is clicked.
function getFinalResult() {
    //Display result on page based on calculated score
     if (score < 2) {
        confirm(`This is not the site for you! Sorry!`);
        console.log(`This is not the site for you! Sorry!`);
    } else if (score >= 2) { 
        confirm(`This is the site for you! Welcome!`);
        console.log(`This is the site for you! Welcome!`);
    } else {
        console.warn("There\'s a problem with this quiz!"); 
    }
    return;
};
