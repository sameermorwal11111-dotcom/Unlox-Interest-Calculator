import { Router } from "express";
import { readData, writeData } from "../data/store.js";
import { calculateInterest } from "../utils/interest.js";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/", async (req, res) => {
  const data = await readData();
  res.json(data.transactions);
});

router.post("/", async (req, res) => {
  const {
    accountId,
    type,
    amount,
    interestRate,
    interestType,
    frequency,
    date,
    notes,
    periodMonths
  } = req.body;

  if (!accountId || !type || !amount || !interestRate) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const data = await readData();
  const transaction = {
    id: uuidv4(),
    accountId,
    type,
    amount: Number(amount),
    interestRate: Number(interestRate),
    interestType: interestType || "simple",
    frequency: frequency || "monthly",
    date: date || new Date().toISOString().slice(0, 10),
    notes: notes || "",
    periodMonths: Number(periodMonths || 12)
  };

  data.transactions.push(transaction);
  await writeData(data);
  res.status(201).json(transaction);
});

router.post("/calculate", (req, res) => {
  const {
    principal,
    rate,
    periodMonths,
    interestType = "simple",
    frequency = "monthly"
  } = req.body;

  if (!principal || !rate || !periodMonths) {
    return res.status(400).json({ message: "principal, rate, and periodMonths are required." });
  }

  const result = calculateInterest({
    principal: Number(principal),
    rate: Number(rate),
    periodMonths: Number(periodMonths),
    interestType,
    frequency
  });

  res.json(result);
});

export default router;
