// Prices are stored as strings like "₹120" (sometimes with stray spaces). Parse safely.
export const parsePrice = (price) => {
  const n = parseFloat(String(price ?? "").replace(/[^0-9.]/g, ""));
  return Number.isNaN(n) ? 0 : n;
};

export const formatINR = (value) =>
  "₹" + Number(value).toLocaleString("en-IN", { maximumFractionDigits: 2 });
