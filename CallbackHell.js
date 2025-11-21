const fs = require("fs");

fs.readFile("test1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("File Data:", data);
  }
});
