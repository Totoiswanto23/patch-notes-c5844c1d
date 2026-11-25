// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note (<=160 chars) for a bug in real life
// to /output/entry.txt, where the sealed scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.0: fixed a bug where walking through a doorway deleted the reason you entered the room.";

// The gate only accepts 1-160 characters of non-whitespace text.
if (ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
