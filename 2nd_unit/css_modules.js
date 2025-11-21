// If you are using ES Modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Re-create __filename and __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    // Send index.html from the same folder
    const homepagepath = path.join(__dirname, "index.html");
    res.sendFile(homepagepath);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
