const fs = require("fs");
const path = require("path");

// Paths
const inputPath = path.join(__dirname, "../tickers/all/all_tickers.txt");
const outputPath = path.join(__dirname, "../src/data/all_tickers.ts");

const tickers = fs
    .readFileSync(inputPath, "utf-8")
    .split("\n")
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

const tsContent = `export const allTICKERS = new Set<string>([
${tickers.map((t) => `  "${t}"`).join(",\n")}
]);
`;

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write it out
fs.writeFileSync(outputPath, tsContent, "utf-8");

console.log(`✅ Successfully generated ${outputPath}`);
