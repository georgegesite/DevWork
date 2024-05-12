var maxProfit = function(prices) {
    var max = 0;
    var r = 0;
    var l = 0;
    while (r < prices.length){
        if ( prices[l] <prices[r])
        {
            let profit = prices[r]-prices[l];
            if (profit > max)
            max = profit;
        }
        else l = r;
        r++;
    }
    return max;
};

var prices = [7,1,5,3,6,4]

console.log(maxProfit(prices));
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.