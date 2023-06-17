//Wait for the DOM to load
window.addEventListener("load", function() {
//Get References to the form and result elements
  const form = document.querySelector("form");
  const reveal = document.getElementById("results");
  const results = document.getElementById("output");


form.addEventListener("submit", function(event) {
  event.preventDefault();
  const question1 = document.getElementById("question1Input").value;
  const question2 = document.getElementById("question2Input").value;
  const question3 = document.getElementById("question3Input").value;
  const question4 = document.getElementById("question4Input").value;
  const question5 = document.getElementById("question5Input").value;

let result;
if (question1 === "Yes") {
  result = "Python!";
} else if (question2 === "Yes") {
  result = "Ruby!";
} else if (question3 === "Yes"){
  result = "Javascript!"
} else if (question4 === "Yes"){
  result = "Go!"
} else if (question5 === "Yes"){
  result = "C#!"
}

results.removeAttribute("class");
event.preventDefault();

document.getElementById("output").inerText = result;




function calcSurvey(event) {
  event.preventDefault();
  
}

});