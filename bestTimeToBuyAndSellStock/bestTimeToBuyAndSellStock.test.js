const maxProfit = require('./bestTimeToBuyAndSellStock.js');

describe('maxProfit', () => {
  test('returns 5 for [7,1,5,3,6,4]', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  });
  test('returns 0 for [7,6,4,3,1]', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
  });
});