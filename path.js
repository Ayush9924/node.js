const path = require("path");
// console.log(__filename);
console.log(__dirname);
// add student req
const filePath = path.join("folder","students","date.txt");
console.log(filePath);

const resolvePaths=path.resolve(filePath);
const extname= path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
console.log({resolvePaths,extname ,basename ,dirname});