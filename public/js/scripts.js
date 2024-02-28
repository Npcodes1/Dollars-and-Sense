// alert("This is working!");

// To add current year to copyright
let currentDate = new Date();

let year = currentDate.getFullYear();
// console.log(year);
document.getElementById("copyright").innerHTML = year;