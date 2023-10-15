const formatPrice = (amount: number) => {
  const formattedAmount = amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return formattedAmount ;
};
export { formatPrice };
