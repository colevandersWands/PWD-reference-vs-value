"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

/**
 * Derives a human-readable label from a numbered directory name.
 * "1-concepts" → "Concepts", "0-console-assert" → "Console Assert"
 */
function labelFromDirName(name) {
  return name
    .replace(/^\d+-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Recursively scans for numbered directories.
 * - Grouping nodes (has numbered subdirs) → recurse
 * - Leaf nodes (no numbered subdirs) → collect .js files
 */
function scanDirectory(dirPath, relativePath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  const numberedDirs = entries
    .filter((e) => e.isDirectory() && /^\d/.test(e.name))
    .sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10));

  // grouping node — recurse into numbered subdirs
  if (numberedDirs.length > 0) {
    const results = [];
    for (const sub of numberedDirs) {
      const subRelative = relativePath
        ? relativePath + "/" + sub.name
        : sub.name;
      results.push(
        ...scanDirectory(path.join(dirPath, sub.name), subRelative),
      );
    }
    return results;
  }

  // leaf node — collect .js files
  const jsFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".js"))
    .map((e) => e.name)
    .sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.localeCompare(b);
    });

  // derive label from path segments: "3-practice/1-write-assertions" → "Practice: Write Assertions"
  const label = relativePath
    .split("/")
    .map((seg) => labelFromDirName(seg))
    .join(": ");

  const result = { directory: relativePath, label, files: jsFiles };

  // if no .js files but other non-hidden files exist, add a note
  if (jsFiles.length === 0) {
    const hasOtherFiles = entries.some(
      (e) => e.isFile() && !e.name.startsWith("."),
    );
    if (hasOtherFiles) {
      result.note =
        "open the files in the /" + relativePath + " folder in VSCode";
    }
  }

  return [result];
}

const structure = scanDirectory(ROOT, "");

const outputPath = path.join(ROOT, "directory-structure.json");
fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2) + "\n");

console.log("wrote", outputPath);
