// create file
const EventEmitter = require("events"); // import EventEmitter class
const emitter = new EventEmitter(); // create an instance of EventEmitter

// define event listener
emitter.on("abc", () => {
    console.log("Welcome to LPU");
});

// emit the event
emitter.emit("abc");

emitter.on("abc", (username) => {
    console.log(`hello ${username}`);
});

// emit the event
emitter.emit("abc", "world");




// task
// create a progeam using node.js event emitter that: 
// tacks how many times each event is emitted 
// logs a summary of all event occurrence when 

emitter.once("abc",()=>{
    console.log("hello world....")
})
emitter.emit("abc");
emitter.emit("abc");
emitter.emit("abc");
// it only works for once

emitter.on("students",(name, course)=>{

    console.log(`My name is: ${name} my course is ${course}`)
});
emitter.emit("students","amit","web D");
emitter.removeAllListeners("students");
emitter.emit("students","amit","web D");