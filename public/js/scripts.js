// alert("This is working!");

// To add current year to copyright
const currentYear = new Date();

let year = currentYear.getFullYear();
// console.log(year);
document.getElementsByClassName("copyright").innerHTML = year;
