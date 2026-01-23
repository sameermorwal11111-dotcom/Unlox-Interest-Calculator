import { Router } from "express";
import { readData, writeData } from "../data/store.js";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", async (req, res) => {
  const data = await readData();
  res.json(data.accounts);
});

router.post("/", async (req, res) => {
  const { name, role, phone, address, avatar } = req.body;
  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required." });
  }

  const data = await readData();
  const account = {
    id: uuidv4(),
    name,
    role,
    phone: phone || "",
    address: address || "",
    avatar: avatar || ""
  };

  data.accounts.push(account);
  await writeData(data);
  res.status(201).json(account);
});

export default router;
