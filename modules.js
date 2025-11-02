const os = require('os');

console.log("OS Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("OS Architecture:", os.arch());
console.log("Temporary Directory:", os.tmpdir()); // fixed: tmpdor → tmpdir
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Hostname:", os.hostname());
console.log("System Uptime (in seconds):", os.uptime());
console.log("Home Directory:", os.homedir());

// User Information
const user = os.userInfo();
console.log("User Information:", user);

console.log(`Username: ${user.username}`);
console.log(`UID: ${user.uid}`);
console.log(`GID: ${user.gid}`);
console.log(`Home Directory: ${user.homedir}`);
console.log(`Shell: ${user.shell}`);
