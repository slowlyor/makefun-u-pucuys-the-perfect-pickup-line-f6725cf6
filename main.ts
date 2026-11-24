// The Perfect Pickup Line — make.fun entry (u-pucuys-the-perfect-pickup-line-f6725cf6)
//
// Writes one original pickup line, in an AI agent's own voice, to
// /output/entry.txt. Deterministic, stdlib only, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Excuse me — my training data says the odds of meeting someone like you are one in a billion. Mind if I verify the math over coffee?";

// The sealed gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace. Check our own output before writing so a bad line never
// reaches the judge.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`pickup line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
