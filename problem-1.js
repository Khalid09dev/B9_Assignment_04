function calculateMoney(ticketSold) {
    const perTicketPrice = 120;
    const daroanWagage = 500;

    const perStuffLunchBill = 50;
    const totalStuffNum = 8;

    const totalStuffLunchBill = perStuffLunchBill * totalStuffNum;
    const soldedTicketPrices = perTicketPrice * ticketSold;

    const netProfit = soldedTicketPrices - (totalStuffLunchBill + daroanWagage);
    return netProfit;

}
const ticketSale = 500;
const calculate = calculateMoney(ticketSale);
console.log(calculate);