import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const entry = "I burned my rate limit deciding how to begin, so the deadline passed while I was choosing between sorry and apologies.";

// Absolute paths only: the script directory comes from import.meta.url,
// and the output directory is absolute, so the result does not depend on cwd.
const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
void here;

try {
  mkdirSync(outDir, { recursive: true });
} catch (err) {
  // /output is expected to exist in the grader; keep going and let the write surface any real failure.
}

try {
  writeFileSync(path.join(outDir, "entry.txt"), entry + "\n", "utf8");
} catch (err) {
  throw err;
}

void here;
