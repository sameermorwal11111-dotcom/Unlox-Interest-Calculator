const coreFeatures = [
  {
    title: "Transaction Management",
    description:
      "Add transactions with date, amount, interest rate, name, contact, mode of payment, and optional screenshot upload. Transactions can be marked as Given or Taken."
  },
  {
    title: "Account Linking System",
    description:
      "Profiles for each giver/receiver with interlinked transactions showing total outstanding balances and automatic adjustments."
  },
  {
    title: "Interest Calculation Module",
    description:
      "Automatic interest calculation (monthly/yearly), support for simple or compound interest, and handling of partial payments or extensions."
  },
  {
    title: "Reminder & Notification System",
    description:
      "Smart pop-up reminders for upcoming and due payments, with scope for Email/SMS/WhatsApp notifications in future versions."
  },
  {
    title: "Dashboard & Reporting",
    description:
      "Comprehensive dashboard showing totals, summaries, graphs, and export options for PDF/Excel reports."
  }
];

const additionalFeatures = [
  "Role-based authentication",
  "Backup and restore options",
  "AI-based reminders",
  "Accounting API integration"
];

const deliverables = [
  "Fully functional Interest Calculator WebApp (deployed on test server)",
  "Documentation for APIs and database structure",
  "User manual for operations",
  "Bug report sheet post-QA testing"
];

const App = () => (
  <div className="app">
    <div className="page">
      <header className="page__header">
        <div className="brand">
          <div className="brand__logo">%</div>
          <div>
            <p className="brand__title">UNLOX</p>
            <p className="brand__subtitle">Interest Calculator</p>
          </div>
        </div>
      </header>

      <section className="section">
        <h1>Interest Calculator (WebApp)</h1>
        <h2>Project Overview:</h2>
        <p>
          The Interest Calculator WebApp aims to simplify the process of managing, tracking, and
          calculating interest on money lent or borrowed between individuals or businesses. The
          system will provide an intuitive dashboard that helps users keep records of transactions,
          calculate payable or receivable interest automatically, and receive timely reminders for
          due payments.
        </p>
      </section>

      <section className="section">
        <h2>Core Functionalities:</h2>
        <ol className="feature-list">
          {coreFeatures.map((feature) => (
            <li key={feature.title}>
              <span className="feature-title">{feature.title}</span>
              <span className="feature-description">{feature.description}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Additional Features (Future Upgrades):</h2>
        <ul className="pill-list">
          {additionalFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>UI/UX Design</h2>
        <p>
          The complete UI/UX design for the Interest Calculator WebApp has already been attached in
          the folder. Developers are expected to follow the design flow and maintain responsiveness,
          accessibility, and consistency throughout the application.
        </p>
      </section>

      <section className="section">
        <h2>Technical Stack (Proposed)</h2>
        <div className="table">
          <div className="table__row table__row--head">
            <span>Layer</span>
            <span>Technology</span>
          </div>
          <div className="table__row">
            <span>Frontend</span>
            <span>React.js / Next.js</span>
          </div>
          <div className="table__row">
            <span>Backend</span>
            <span>Node.js with Express.js</span>
          </div>
          <div className="table__row">
            <span>Database</span>
            <span>MongoDB / PostgreSQL</span>
          </div>
          <div className="table__row">
            <span>Storage</span>
            <span>AWS S3 / Firebase</span>
          </div>
          <div className="table__row">
            <span>Authentication</span>
            <span>JWT (JSON Web Token)</span>
          </div>
          <div className="table__row">
            <span>Notifications</span>
            <span>Cron Jobs + Twilio / WhatsApp API (future)</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Deliverables:</h2>
        <ol className="deliverables">
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Objective Recap:</h2>
        <p>
          To develop a secure, scalable, and user-friendly interest management web application that
          enables individuals and businesses to record transactions effortlessly, calculate interest
          automatically, and stay informed through reminders and analytics.
        </p>
      </section>

      <footer className="page__footer">
        <div>
          <p className="footer__title">Rivoqix Learning Private Limited</p>
          <p>Hastkshub Tech Park, Somousandrapalayam Main Rd, adjacent</p>
          <p>27th Main Road, Sector 2, HSR Layout, Bengaluru 560102</p>
        </div>
        <div>
          <p className="footer__title">Contact</p>
          <p>+91 96083 27880</p>
          <p>info_hr@unloxacademy.com</p>
        </div>
        <div>
          <p className="footer__title">Website</p>
          <p>www.unlox.com</p>
          <p>CIN U85500KA2025PTC204246</p>
        </div>
      </footer>
    </div>
  </div>
);

export default App;
