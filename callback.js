function greet(name, call) {
  console.log("Hello " + name);
  call();
}

function bye() {
  console.log("Goodbye!");
}

greet("Ayush", bye);
