const EventEmitter = require("events");

const event = new EventEmitter();

// Listener
event.on("greet", () => {
  console.log("Hello from EventEmitter!");
});

// Trigger/Emit
event.emit("greet");


event.on("sayMyName", (name) => {
  console.log(`My name is ${name}`);
});

event.emit("sayMyName", "Ayush");
