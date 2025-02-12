export function formatCurrency(
  number: number,
  locale: string,
  currency: string = "ZAR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(number);
}
