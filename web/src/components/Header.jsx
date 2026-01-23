const Header = () => (
  <header className="header">
    <div className="header__brand">
      <div className="header__logo">%</div>
      <div>
        <p className="header__brand-title">UNLOX</p>
        <p className="header__brand-subtitle">Interest Calculator</p>
      </div>
    </div>
    <div className="header__actions">
      <button className="icon-button" type="button" aria-label="Calculator">
        <span>🧮</span>
      </button>
      <button className="icon-button" type="button" aria-label="Notifications">
        <span>🔔</span>
      </button>
      <button className="cta-button" type="button">+ Add Transaction</button>
    </div>
  </header>
);

export default Header;
