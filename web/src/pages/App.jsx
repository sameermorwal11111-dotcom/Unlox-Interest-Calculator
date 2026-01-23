import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import SummaryCard from "../components/SummaryCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import PaymentsDue from "../components/PaymentsDue.jsx";
import InvestorPerformance from "../components/InvestorPerformance.jsx";
import AccountsList from "../components/AccountsList.jsx";
import InterestCalculator from "../components/InterestCalculator.jsx";
import TransactionTable from "../components/TransactionTable.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const App = () => {
  const [summary, setSummary] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [summaryRes, accountsRes, transactionsRes] = await Promise.all([
        fetch(`${API_URL}/api/summary`),
        fetch(`${API_URL}/api/accounts`),
        fetch(`${API_URL}/api/transactions`)
      ]);

      const [summaryData, accountsData, transactionsData] = await Promise.all([
        summaryRes.json(),
        accountsRes.json(),
        transactionsRes.json()
      ]);

      setSummary(summaryData);
      setAccounts(accountsData);
      setTransactions(transactionsData);
    };

    loadData();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <div className="dashboard__left">
          <SummaryCard summary={summary} />
          <PaymentsDue reminders={summary?.reminders || []} accounts={accounts} />
          <InvestorPerformance transactions={transactions} accounts={accounts} />
        </div>
        <div className="dashboard__right">
          <SectionTitle title="Accounts" subtitle="Investors & customers" />
          <AccountsList accounts={accounts} />
          <SectionTitle title="Interest Calculator" subtitle="Quick preview" />
          <InterestCalculator apiUrl={API_URL} />
        </div>
      </div>
      <section className="transactions">
        <SectionTitle title="Recent Transactions" subtitle="Track the latest activity" />
        <TransactionTable transactions={transactions} accounts={accounts} />
      </section>
    </div>
  );
};

export default App;
