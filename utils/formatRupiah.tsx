const formatRupiah = (amount: number | string): string => {
  const formattedAmount = Number(amount)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return `Rp ${formattedAmount}`;
};

export default formatRupiah;
