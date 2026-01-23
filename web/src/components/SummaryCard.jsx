const SummaryCard = ({ summary }) => {
  const totalGiven = summary?.totalGiven || 0;
  const totalTaken = summary?.totalTaken || 0;
  const totalOutstanding = summary?.totalOutstanding || 0;

  return (
    <section className="summary-card">
      <div>
        <p className="summary-card__label">Available amount</p>
        <p className="summary-card__value">₹ {totalOutstanding.toLocaleString("en-IN")}</p>
        <p className="summary-card__meta">Total given: ₹ {totalGiven.toLocaleString("en-IN")}</p>
      </div>
      <div className="summary-card__actions">
        <button className="primary-button" type="button">Redeem Now</button>
        <span className="summary-card__meta">
          Total taken: ₹ {totalTaken.toLocaleString("en-IN")}
        </span>
      </div>
    </section>
  );
};

export default SummaryCard;
