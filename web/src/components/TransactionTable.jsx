const TransactionTable = ({ transactions, accounts }) => (
  <div className="transaction-table">
    <div className="transaction-table__header">
      <span>Account</span>
      <span>Type</span>
      <span>Amount</span>
      <span>Rate</span>
      <span>Date</span>
    </div>
    {transactions.map((txn) => {
      const account = accounts.find((acc) => acc.id === txn.accountId);
      return (
        <div className="transaction-table__row" key={txn.id}>
          <div className="transaction-table__account">
            <img src={account?.avatar} alt={account?.name} />
            <div>
              <p>{account?.name || "Account"}</p>
              <span>{account?.role}</span>
            </div>
          </div>
          <span className={`pill ${txn.type}`}>{txn.type}</span>
          <span>₹ {txn.amount.toLocaleString("en-IN")}</span>
          <span>{txn.interestRate}%</span>
          <span>{txn.date}</span>
        </div>
      );
    })}
  </div>
);

export default TransactionTable;
