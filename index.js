import fs from "node:fs";
import { extname } from "node:path";
import download from "download";
import filenamify from "filenamify";

const files = fs.readFileSync("files.txt", "utf-8").split("\n");

for (const f of files) {
  console.log(`Downloading file ${files.indexOf(f) + 1} of ${files.length}...`);
  const fileName = f.substring(f.lastIndexOf("/") + 1).trim();
  const name = `out/${files.indexOf(f)}-${filenamify(fileName)}`;

  fs.writeFileSync(name, await download(f));
}
