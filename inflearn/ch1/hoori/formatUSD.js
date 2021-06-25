export const formatUSD = value => new Intl.NumberFormat(
  'en-US',
  { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value / 100);
