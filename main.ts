import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My agent's demo crashed, so it rolled back to the version that worked — the one from before it wrote any code.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");
