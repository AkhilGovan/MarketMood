import * as fs from "fs";
import * as path from "path";

// Paths
const inputPath = path.join(__dirname, "../tickers/all/allTickers.txt");
const outputPath = path.join(__dirname, "../src/data/allTickers.ts");

const tickers = fs
    .readFileSync(inputPath, "utf-8")
    .split("\n")
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

const tsContent = `export const allTickers = new Set<string>([
${tickers.map((t) => `  "${t}"`).join(",\n")}
]);
`;

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write it out
fs.writeFileSync(outputPath, tsContent, "utf-8");

console.log(`Successfully generated ${outputPath}`);
