// Target goal of this algorithm
// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var getMaxProfit = function(A) {
  console.log('prices is: ', A);
  var highestProfit = A[0] - A[1];
  console.log('current highest profit is: ', highestProfit);
  for (let i = 0; i < A.length - 1; i++) {
    let profit = A[i] - A[i + 1];
    if (profit > highestProfit) {
      highestProfit = profit;
    }
  }
  console.log("Final max profit is: ", highestProfit);
};
getMaxProfit(stockPricesYesterday);