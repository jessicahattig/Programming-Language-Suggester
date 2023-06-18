//Results options
const python = "Python is a versatile, high-level language known for its simplicity and readability. It has a large standard library and a vibrant community. Python is widely used for web development, scientific computing, data analysis, machine learning, and automation."
const ruby = "Ruby is a dynamic, interpreted language known for its simplicity and productivity. It has an elegant syntax that focuses on readability and is often used for web development, scripting, and prototyping."
const js = "JavaScript is a versatile, interpreted language primarily used for front-end web development. It allows for interactive and dynamic web content, including animations, user interfaces, and browser-based applications. JavaScript is also increasingly popular for back-end development using frameworks like Node.js."
const go = "Go (often referred to as Golang) is a statically-typed, compiled language developed by Google. It is designed for efficiency and simplicity, offering built-in support for concurrency. Go is often used for developing scalable network applications, system tools, and distributed systems."
const c = "C# (pronounced C-sharp) is a statically-typed language developed by Microsoft. It is commonly used for building Windows applications, web applications, and games using the .NET framework. C# emphasizes strong typing, scalability, and performance."


//Wait for the DOM to load
window.addEventListener("load", function() {
//Get References to the form and result elements
  const form = document.querySelector("form");
  const reveal = document.getElementById("results");
  const results = document.getElementById("output");

//Add event listener to the form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); //Prevent form submission

//Call the function to determine the recommended language, calc results and display recommended language
function result(event) {
  let recommendedLanguage = document.getElementById("results");
  recommendedLanguage.removeAttribute("class")
  event.preventDefault();

  //Get Survey values
  const q1 = document.getElementById("question1Input").value;
  const q2 = document.getElementById("question2Input").value;
  const q3 = document.getElementById("question3Input").value;
  const q4 = document.getElementById("question4Input").value;
  const q5 = document.getElementById("question5Input").value;

  //Branching
  let result;
  if (q1 ==="Yes") {
    result = python;
  } else if (q2 === "Yes") {
    result = ruby;
  } else if (q3 === "Yes") {
    result = js;
  } else if (q4 === "Yes") {
    result = go;
  } else if (q5 === "Yes") {
    result = c;
  } else if (q1 === "No") {
    result = ruby;
  } else if (q2 === "No") {
    result = js;
  } else if (q3 === "No") {
    result = python;
  } else if (q4 === "No") {
    result = c;
  } else if (q5 === "No") {
    result = go;
  }

document.getElementById("output").innerText = result;
}