let newArr = []

  for(let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {

      if (prices[j] <= prices[i]) {
        newArr.push(prices[i] - prices[j])
        break;
      }
        else if(j==prices.length-1){
          newArr.push(prices[i])
          break;
      }
    }
  }
  newArr.push(prices[prices.length-1])
  return newArr;
};
