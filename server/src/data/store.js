import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, "db.json");
const seedFile = path.join(__dirname, "seed.json");

const ensureDataFile = async () => {
  try {
    await fs.access(dataFile);
  } catch (error) {
    const seed = await fs.readFile(seedFile, "utf-8");
    await fs.writeFile(dataFile, seed);
  }
};

export const readData = async () => {
  await ensureDataFile();
  const raw = await fs.readFile(dataFile, "utf-8");
  return JSON.parse(raw);
};

export const writeData = async (data) => {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
};
