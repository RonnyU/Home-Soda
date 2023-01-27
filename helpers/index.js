export const formatCurrency = (money) => {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
