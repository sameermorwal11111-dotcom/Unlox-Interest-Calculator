const SectionTitle = ({ title, subtitle }) => (
  <div className="section-title">
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <button className="link-button" type="button">View all</button>
  </div>
);

export default SectionTitle;
