const AccountsList = ({ accounts }) => (
  <div className="accounts-list">
    {accounts.map((account) => (
      <div className="accounts-list__item" key={account.id}>
        <div className="accounts-list__profile">
          <img src={account.avatar} alt={account.name} />
          <div>
            <p>{account.name}</p>
            <span>{account.address}</span>
          </div>
        </div>
        <div>
          <p>{account.phone}</p>
          <button className="link-button" type="button">More</button>
        </div>
      </div>
    ))}
    <button className="outline-button" type="button">+ New Investor</button>
  </div>
);

export default AccountsList;
