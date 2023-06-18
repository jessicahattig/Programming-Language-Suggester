//Wait for the DOM to load
window.addEventListener("load", function() {
//Get References to the form and result elements
  const form = document.querySelector("form");
  const reveal = document.getElementById("results");
  const results = document.getElementById("output");

//Add event listener to the form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();

//Get Survey responses
  const q1 = document.getElementById("question1Input").value;
  const q2 = document.getElementById("question2Input").value;
  const q3 = document.getElementById("question3Input").value;
  const q4 = document.getElementById("question4Input").value;
  const q5 = document.getElementById("question5Input").value;

//Call the function to determine the recommended language.
  const recommendedLanguage = determineRecommendedLanguage(q1, q2, q3, q4, q5);

//Function to determine the recommended language based on survey results
function determineRecommendedLanguage (q1, q1, q3, q4, q5) {
  if (q1 ==="Yes") {
    result = Python;
  } else if (q2 ==="Yes") {
    result = Ruby;
  } else {
    return "C#"
  }
}

//Display recommended language
document.getElementById("output").inerText = recommendedLanguage;

//Show the result section
results.removeAttribute("class");
});



// if (question1 === "Yes") {
//   result = "Python!";
// } else if (question2 === "Yes") {
//   result = "Ruby!";
// } else if (question3 === "Yes"){
//   result = "Javascript!"
// } else if (question4 === "Yes"){
//   result = "Go!"
// } else if (question5 === "Yes"){
//   result = "C#!"
// }








// function calcSurvey(event) {
//   event.preventDefault();
  
// }

// });