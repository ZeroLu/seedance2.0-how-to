import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const sourcePath = path.join(repoRoot, "README.md");
const targetPath = path.join(repoRoot, "docs", "index.md");

const header =
  "<!-- This file is auto-generated from README.md. Do not edit directly. -->\n\n";

function rewriteReadmeLinks(markdown) {
  return markdown
    .replace(/\]\(\/README\.md#([^)]+)\)/g, "](#$1)")
    .replace(/\]\(\/README\.md\)/g, "](/)");
}

async function main() {
  const readme = await readFile(sourcePath, "utf8");
  const transformed = rewriteReadmeLinks(readme);

  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, header + transformed, "utf8");
}

main().catch((error) => {
  console.error("Failed to sync README.md to docs/index.md");
  console.error(error);
  process.exit(1);
});
