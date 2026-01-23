import { Router } from "express";
import { readData } from "../data/store.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await readData();
  const totalGiven = data.transactions
    .filter((txn) => txn.type === "given")
    .reduce((sum, txn) => sum + txn.amount, 0);
  const totalTaken = data.transactions
    .filter((txn) => txn.type === "taken")
    .reduce((sum, txn) => sum + txn.amount, 0);
  const totalOutstanding = Math.max(totalGiven - totalTaken, 0);

  res.json({
    totalGiven,
    totalTaken,
    totalOutstanding,
    reminders: data.reminders
  });
});

export default router;
