const statusLabel = {
  today: "Today",
  tomorrow: "Tomorrow",
  upcoming: "Upcoming"
};

const PaymentsDue = ({ reminders, accounts }) => (
  <section className="payments-due">
    <div className="payments-due__header">
      <h3>Payments Due</h3>
      <button className="link-button" type="button">View schedule</button>
    </div>
    <div className="payments-due__list">
      {reminders.map((reminder) => {
        const account = accounts.find((acc) => acc.id === reminder.accountId);
        return (
          <div className="payments-due__item" key={reminder.id}>
            <img src={account?.avatar} alt={account?.name} />
            <div>
              <p className="payments-due__amount">₹ {reminder.amount}</p>
              <span>{statusLabel[reminder.status] || "Soon"}</span>
            </div>
          </div>
        );
      })}
    </div>
    <button className="primary-button" type="button">+ Add Transactions</button>
  </section>
);

export default PaymentsDue;
