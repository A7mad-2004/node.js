const computeTax = (amount, taxparson)=>{
      const tax = (taxparson/100)*amount;
      return tax;
}
console.log(computeTax(500,10));
