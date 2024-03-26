const { checkAmount } = require('./cashRegister');

describe('checkAmount', () => {
  test('calculates total amount correctly', () => {
    const cidExample = [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ];
    const expectedTotalAmount = 335.41; // This is the expected total amount in the cash drawer
    expect(checkAmount(cidExample)).toBe(expectedTotalAmount);
  });
});


////////////////////////////

const { checkTotalChange } = require('./cashRegister');

describe('checkTotalChange', () => {
  test('calculates total change correctly', () => {
    const price = 19.5;
    const cash = 20;
    const expectedChange = 0.5; // This is the expected change for the given price and cash
    expect(checkTotalChange(price, cash)).toBe(expectedChange);
  });
});

