// Entry point for the gta6-meme-x-01 bounty.
//
// The entry itself is the X post whose address lives in POST.json at the
// repository root. All this program has to do is hand that file to the
// grader, by placing a copy of it in the output directory.
//
// It runs on plain Node with nothing but the standard library: no network,
// no extra packages, and nothing outside the repository is read.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The grader tells the program where the repository and the output folder
// live through environment variables; the fallbacks match the grader's
// defaults when it runs from the repository root.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "POST.json");
const destination = join(outDir, "POST.json");

// Make sure the output folder is there first: the grader may hand us a
// fresh directory that does not exist yet, and the copy would fail without
// it. Creating it recursively is a no-op when it already exists.
mkdirSync(outDir, { recursive: true });

// Copy the post file byte for byte, so what the grader reads is exactly
// what the repository holds. Nothing is printed on success.
copyFileSync(source, destination);
