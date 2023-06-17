//Wait for the DOM to load
window.addEventListener("load", function() {
//Get References to the form and result elements
  const form = document.querySelector("form");
  const reveal = document.getElementById("results");
  const results = document.getElementById("output");

//Add event listener to the form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("HOLA");

//Getting Survey responses
  const q1 = document.querySelector("question1Input").value;
  const q2 = document.querySelector("question2Input").value;
  const q3 = document.querySelector("question3Input").value;
  const q4 = document.querySelector("question4Input").value;
  const q5 = document.querySelector("question5Input").value;

//Call the function to determine the recommended language.
  const recommendedLanguage = determineRecommendedLanguage(question1, question2, question3, question4, question5);

//Display recommended language
document.getElementById("output").inerText = recommendedLanguage;

//Show the results section
results.removeAttribute("class");
});

//Function to determine the recommended language based on survey results
function determineRecommendedLanguage (q1, q1, q3, q4, q5) {
  if (q1 ==="Yes" && q2 ==="Yes" && q3 ==="Yes") {
    return "Python"
  } else if (q4 ==="Yes" && q5 ==="Yes") {
    return "Javascript"
  } else {
    return "C#"
  }
}

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








function calcSurvey(event) {
  event.preventDefault();
  
}

});