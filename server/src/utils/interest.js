export const calculateInterest = ({
  principal,
  rate,
  periodMonths,
  interestType,
  frequency
}) => {
  const monthlyRate = rate / 100 / 12;
  const periods = frequency === "yearly" ? periodMonths / 12 : periodMonths;

  if (interestType === "compound") {
    const amount = principal * Math.pow(1 + monthlyRate, periods);
    return {
      interest: Number((amount - principal).toFixed(2)),
      total: Number(amount.toFixed(2))
    };
  }

  const interest = principal * monthlyRate * periods;
  return {
    interest: Number(interest.toFixed(2)),
    total: Number((principal + interest).toFixed(2))
  };
};
