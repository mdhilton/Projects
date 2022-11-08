function sortArrayByParity(nums) {
  return nums.filter(number => number % 2 === 0).concat(nums.filter(number => number % 2 !== 0));
}
