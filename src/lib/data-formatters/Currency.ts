export const getFormattedCurrency = (value: string) => {
  // Remove the dollar sign
  const numericValue = parseFloat(value.replace('$', ''));

  // Format the number with commas and prepend the dollar sign
  return '$' + numericValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
};
