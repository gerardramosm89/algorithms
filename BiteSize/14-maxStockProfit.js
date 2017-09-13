/*
	- This function will take in an array of prices as a parameter
	- Then it will return the max possible profit of the day

	Note:
	- If no profit is possible, return -1
	- A max profit of 0 is treated as any other max profit value
*/

var arr = [32,46,26,38,40,48,42];

function maxStockProfit (pricesArr) {
	var maxProfit = -1;
	var buyPrice = 0;
	var sellPrice = 0;

	var changeBuyPrice = true;

	for (var i = 0; i < pricesArr.length; i++) {
		if (changeBuyPrice) buyPrice = pricesArr[i];
		sellPrice = pricesArr[i + 1];

		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		} else {
			var tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) maxProfit = tempProfit;
			changeBuyPrice = false;
		}
	}
	console.log('Our max profit is: ', maxProfit);
	
}

maxStockProfit(arr);


