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
