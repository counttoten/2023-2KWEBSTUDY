// your code

const factorial = (n) => {
  var answer = 1;
  for (let index = 1; index <= n; index++) {
    answer *= index;
  }
  return answer;
};

const permutation = (n, r) => factorial(n) / factorial(n - r);
const combination = (n, r) => permutation(n, r) / factorial(r);
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
  permutation,
  combination,
  multiPermutation,
  multiCombination,
};
