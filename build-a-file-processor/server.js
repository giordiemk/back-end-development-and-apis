// Starter file — add your code here

const fs = require("fs");
const fsPromises = require("fs/promises");
const os = require("os");
const path = require("path");
// console.log(fs);

const data = fs.readFileSync("assets/poem.txt", { encoding: "utf8"});
// console.log(data);

fs.readFile("assets/poem.txt", { encoding: "utf8"}, (err, data) => {
    // console.log(data);
});

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", {
        encoding: "utf8",
    });
    console.log(data);
}

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nCaccapupù!");

const exists = fs.existsSync("assets/output.txt");
console.log(exists);

const entries = fs.readdirSync("assets");
console.log(entries);

const buf = Buffer.from("Hello, Node!");
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));

const bufAlloc = Buffer.alloc(8, 0xff);
console.log(bufAlloc);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash);

const random = crypto.randomBytes(16).toString("hex");
console.log(random);

const id = crypto.randomUUID();
console.log(id);

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

const filePath = path.join(__dirname, "assets", "poem.txt");
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.join("assets", "..", "server.js"));
console.log(path.resolve("assets", "..", "server.js"));

const parts = path.parse(filePath);
console.log(parts);

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);
console.log(process.argv);

process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
    console.log(chunk);
});

readable.on("end", (chunk) => {
    console.log(chunk);
});

const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();

readable.pipe(writable);