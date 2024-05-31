const formatRupiah = (amount: number | string): string => {
  const formattedAmount = Number(amount)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return `Rp ${formattedAmount}`;
};

export default formatRupiah;

export const formatDate = (dateStr: string) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const date = new Date(dateStr);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const midtransKey = process.env.NEXT_PUBLIC_MIDTRANS_ACCESS_KEY;
