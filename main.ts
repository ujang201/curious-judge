// curious-judge: writes one short text to /output/entry.txt.
// The text is a single fixed string: deterministic, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Every night, the last lighthouse keeper lights the lamp for ships that stopped coming years ago. Not because he expects them — because the dark would notice if he didn't.";

// The gate requires 1–280 Unicode code points; fail loudly if the text ever drifts out of range.
if ([...TEXT].length < 1 || [...TEXT].length > 280) {
  throw new Error(`entry text is ${[...TEXT].length} code points, must be 1–280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
