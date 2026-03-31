const computeTax = (amount, taxparson) => {
  const tax = (taxparson / 100) * amount;
  return tax;
};
console.log(`sync is :`, computeTax(500, 15));

///////////
/// collback
const cb = () => {
  console.log(`async is :`, computeTax(500, 15));
};
/// end collback
setTimeout(cb, 500);
