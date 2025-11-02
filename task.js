const EventEmitter = require("events");
const emitter = new EventEmitter();

// To keep track of how many times each event occurred
const eventCount = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-updated": 0,
  "user-logout": 0,
};


// User login
emitter.on("user-login", (username) => {
  eventCount["user-login"]++;
  console.log(`${username} logged in!`);
});

// User purchase
emitter.on("user-purchase", (username, item) => {
  eventCount["user-purchase"]++;
  console.log(`${username} purchased ${item}`);
});

// Profile updated
emitter.on("profile-updated", (username) => {
  eventCount["profile-updated"]++;
  console.log(`${username} updated their profile`);
});

// User logout
emitter.on("user-logout", (username) => {
  eventCount["user-logout"]++;
  console.log(`${username} logged out!`);
});

// Summary of all events
emitter.on("summary", () => {
  console.log("Event Summary:");
  console.log(eventCount);
});


// ✅ Emit (trigger) the events
emitter.emit("user-login", "Ayush");
emitter.emit("user-purchase", "Ayush", "Laptop");
emitter.emit("profile-updated", "Ayush");
emitter.emit("user-logout", "Ayush");

// Show summary
emitter.emit("summary");
