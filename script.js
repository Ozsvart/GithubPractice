var todos = [
  "brush teeth",
  "clean room",
  "exercise",
  "study javascript",
  "eat healthy",
];

/* for (var i = 0; i < todos.length; i++) {
  console.log(todos[i] + "!");
} */

/* for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
} */

/* var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  todos.pop();
} */

/* var counterOne = 10;
while (counterOne > 10) {
  console.log("while", counterOne);
  counterOne--;
}

var counterTwo = 10;
do {
  console.log("do while", counterTwo);
  counterTwo--;
} while (counterTwo > 10); */

/* var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  console.log(i);
}

todos.forEach(function (todo, i) {
  console.log(todo, i + " done");
}); */

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
