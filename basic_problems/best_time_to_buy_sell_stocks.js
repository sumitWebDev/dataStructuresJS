var maxProfit = function(prices) {
    let min = prices[0];
    let max_profit = -Infinity;
    for(let i =0; i<prices.length;i++){
        if(prices[i]<min)
            min = prices[i]
        if((prices[i]-min) > max_profit){
            max_profit = prices[i]-min
        }
    }
    return max_profit
};

console.log(maxProfit([7,1,5,3,6,4]));