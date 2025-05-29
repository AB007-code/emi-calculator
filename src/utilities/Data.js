export const Data = (loanAmount, interest, term) => {
  let arr = [];
  for (let i = 0; i < term * 12; i++) {
    arr.push({
      id: i + 1,
      principle: loanAmount,
    });
  }
  return arr;
};
