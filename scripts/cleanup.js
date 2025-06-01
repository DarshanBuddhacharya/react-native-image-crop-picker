const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "../android/build");
fs.rmSync(dir, { recursive: true, force: true });
console.log("✔ android/build cleaned up");
