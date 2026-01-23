import express from "express";
import cors from "cors";
import morgan from "morgan";
import accountsRouter from "./routes/accounts.js";
import transactionsRouter from "./routes/transactions.js";
import summaryRouter from "./routes/summary.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ status: "Unlox Interest Calculator API" });
});

app.use("/api/accounts", accountsRouter);
app.use("/api/transactions", transactionsRouter);
app.use("/api/summary", summaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
