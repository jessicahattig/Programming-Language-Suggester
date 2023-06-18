//Results options
const python = "Python is a versatile, high-level language known for its simplicity and readability. It has a large standard library and a vibrant community. Python is widely used for web development, scientific computing, data analysis, machine learning, and automation."
const js = "JavaScript is a versatile, interpreted language primarily used for front-end web development. It allows for interactive and dynamic web content, including animations, user interfaces, and browser-based applications. JavaScript is also increasingly popular for back-end development using frameworks like Node.js."
const c = "C# (pronounced C-sharp) is a statically-typed language developed by Microsoft. It is commonly used for building Windows applications, web applications, and games using the .NET framework. C# emphasizes strong typing, scalability, and performance."

window.addEventListener("load", function() { //Wait for the DOM to load
  const form = document.querySelector("form"); //Get References to the form
  form.addEventListener("submit", calc)
  let resetBtn = document.querySelector("button#reset");


//Function to determine the recommended language based on survey responses
function calc(event) {
  event.preventDefault();


  //Get Survey values
  const q1 = document.getElementById("question1").value;
  const q2 = document.getElementById("question2").value;
  const q3 = document.getElementById("question3").value;
  const q4 = document.getElementById("question4").value;
  const q5 = document.getElementById("question5").value;

  //Branching
  let result;
  if (q1 ==="Yes") {
    result = python;
  } else if (q2 === "Yes") {
    result = js;
  } else if (q3 === "Yes") {
    result = c;
  } else if (q4 === "Yes") {
    result = python;
  } else if (q5 === "Yes") {
    result = c;
  } else if (q1 ==="No") {
    result = js;
  } else if (q2 ==="No") {
    result = c;
  } else if (q3 ==="No") {
    result = python;
  } else if (q4 ==="No") {
    result = c;
  } else {
    result = js;
  }

document.getElementById("result").innerText = result;

let recommendedLanguage = document.getElementById("bigreveal");
  recommendedLanguage.removeAttribute("class")
  }

resetBtn.addEventListener("click", function() {
  bigreveal.setAttribute("class", "hidden");
  const q1 = document.getElementById("question1").value = null;
  const q2 = document.getElementById("question2").value = null;
  const q3 = document.getElementById("question3").value = null;
  const q4 = document.getElementById("question4").value = null;
  const q5 = document.getElementById("question5").value = null;
  });
});