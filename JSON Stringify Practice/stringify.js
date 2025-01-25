let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let jsonBikes = JSON.stringify(bikes);
let jsonPerson = JSON.stringify(person);
let jsonTodos = JSON.stringify(todos);

let jsonContainer = document.getElementById("jsonContainer");

for (Obj of [jsonBikes, jsonPerson, jsonTodos]) {
    let paras = document.createElement("p");
    paras.classList.add("para","p-3");
    paras.textContent = Obj;
    jsonContainer.appendChild(paras);
}