export function formatPrice(price: number, type: "venta" | "alquiler", monthAbbr: string): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
  return type === "alquiler" ? `${formatted}${monthAbbr}` : formatted;
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
