/**
 * Formats a given value as a currency string with the specified currency symbol.
 * @param value - The value to format as a currency string.
 * @param currency - The currency symbol to use. Defaults to '$'.
 * @returns The formatted currency string.
 */
export const getFormattedCurrency = (value: string, currency: string = '$') => {
  // Remove the dollar sign
  const numericValue = parseFloat(value.replace(currency, ''));

  // Format the number with commas and prepend the dollar sign
  return currency + numericValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
};
