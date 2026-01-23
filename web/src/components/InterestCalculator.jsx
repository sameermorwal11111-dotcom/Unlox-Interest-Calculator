import { useState } from "react";

const InterestCalculator = ({ apiUrl }) => {
  const [form, setForm] = useState({
    principal: 100000,
    rate: 3,
    periodMonths: 10,
    interestType: "simple",
    frequency: "monthly"
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/api/transactions/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <form className="interest-calculator" onSubmit={handleSubmit}>
      <div className="interest-calculator__summary">
        <div>
          <p>Net interest</p>
          <strong>₹ {result?.interest?.toLocaleString("en-IN") || "0"}</strong>
        </div>
        <div>
          <p>Total payable</p>
          <strong>₹ {result?.total?.toLocaleString("en-IN") || "0"}</strong>
        </div>
      </div>
      <label>
        Primary amount
        <input
          type="number"
          name="principal"
          value={form.principal}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Interest rate (%)
        <input
          type="number"
          name="rate"
          value={form.rate}
          onChange={handleChange}
          min="0"
          step="0.1"
        />
      </label>
      <label>
        Interest frequency
        <select name="frequency" value={form.frequency} onChange={handleChange}>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <label>
        Interest type
        <select name="interestType" value={form.interestType} onChange={handleChange}>
          <option value="simple">Simple Interest</option>
          <option value="compound">Compound Interest</option>
        </select>
      </label>
      <label>
        Interest period (months)
        <input
          type="number"
          name="periodMonths"
          value={form.periodMonths}
          onChange={handleChange}
          min="1"
        />
      </label>
      <button className="primary-button" type="submit">Calculate</button>
    </form>
  );
};

export default InterestCalculator;
