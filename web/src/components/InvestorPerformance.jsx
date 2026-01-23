const InvestorPerformance = ({ transactions, accounts }) => {
  const investors = transactions.slice(0, 3).map((txn) => {
    const account = accounts.find((acc) => acc.id === txn.accountId);
    return {
      id: txn.id,
      name: account?.name || "Investor",
      avatar: account?.avatar,
      amount: txn.amount,
      rate: txn.interestRate,
      date: txn.date
    };
  });

  return (
    <section className="investor-performance">
      <div className="section-title compact">
        <div>
          <h3>Investor Performance</h3>
          <p>Recent interest updates</p>
        </div>
        <button className="link-button" type="button">View All</button>
      </div>
      <div className="investor-performance__list">
        {investors.map((investor) => (
          <div className="investor-performance__item" key={investor.id}>
            <div className="investor-performance__profile">
              <img src={investor.avatar} alt={investor.name} />
              <div>
                <p>{investor.name}</p>
                <span>{investor.date}</span>
              </div>
            </div>
            <div className="investor-performance__stats">
              <strong>₹ {investor.amount.toLocaleString("en-IN")}</strong>
              <span>{investor.rate}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorPerformance;
