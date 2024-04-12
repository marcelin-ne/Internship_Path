const { checkAmount } = require('./cashRegister');

const cid = [
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
    const expectedTotalAmount = 33541; // This is the expected total amount in the cash drawer
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


////////////////////////////

// Importa la función a probar
const { compareTotalAndDrawer } = require('./cashRegister');

// Prueba unitaria para compareTotalAndDrawer
// Prueba unitaria para compareTotalAndDrawer
describe('compareTotalAndDrawer', () => {
    // Prueba para verificar si devuelve INSUFFICIENT_FUNDS cuando el cambio es mayor que el total en el cajón
    test('returns INSUFFICIENT_FUNDS when total change is greater than total drawer', () => {
      // Define los datos de prueba
      const price = 19.5;
      const cash = 400;
  
      // Ejecuta la función a probar
      const result = compareTotalAndDrawer(price, cash, cid);
  
      // Verifica si el resultado es el esperado
      expect(result).toEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
    });
  
    // Prueba para verificar si devuelve CLOSED cuando el total en el cajón es igual al cambio
    test('returns CLOSED when total drawer is equal to total change', () => {
      // Define los datos de prueba
      const price = 164.59;
      const cash = 500;
  
      // Ejecuta la función a probar
      const result = compareTotalAndDrawer(price, cash, cid);
      
      console.log(checkAmount(cid));
      console.log(checkTotalChange(price, cash));
  
      // Verifica si el resultado es el esperado
      expect(result).toEqual({ status: "CLOSED", change: cid });
    });
  
    // Prueba para verificar si devuelve OPEN cuando el total en el cajón es mayor que el cambio
    test('returns OPEN when total drawer is greater than total change', () => {
      // Define los datos de prueba
      const price = 19.5;
      const cash = 20;
  
      // Ejecuta la función a probar
      const result = compareTotalAndDrawer(price, cash, cid);
  
      // Verifica si el resultado es el esperado
      expect(result).toEqual({ status: "OPEN", change: [] });
    });
  });

  const { calculateCoinCounts } = require('./cashRegister'); // Ajusta el nombre del archivo según corresponda

describe('calculateCoinCounts', () => {
  test('calculates coin counts correctly', () => {
    // Define los datos de prueba
    const amount = 5.76;
    const currencyUnits = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };

    // Ejecuta la función a probar
    const result = calculateCoinCounts(amount, currencyUnits);

    //console.log(result);
    // Verifica si el resultado es el esperado
    expect(result).toEqual([
        { "TEN": 0 },
        { "TWENTY": 0 },
        { "ONE HUNDRED": 0 },
        { "FIVE": 1 },
        { "ONE": 5 },
        { "QUARTER": 23 },
        { "DIME": 57 },
        { "NICKEL": 115 },
        { "PENNY": 576 }
        ]);
    });
});


//////////////////////////

const { checkCoinCount } = require('./cashRegister.js'); // Ajusta el nombre del archivo según corresponda

describe('checkCoinCount', () => {
  test('calculates coin count correctly', () => {
    // Define los datos de prueba
    const cid = [
      ["PENNY", 1.01],
      ["NICKEL", 2.00],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ];

    // Ejecuta la función a probar
    const result = checkCoinCount(cid);
    console.log(result);

    // Verifica si el resultado es el esperado
    expect(result).toEqual([
      { "PENNY": 101 },
      { "NICKEL": 40 },
      { "DIME": 31 },
      { "QUARTER": 17 },
      { "ONE": 90 },
      { "FIVE": 11 },
      { "TEN": 2 },
      { "TWENTY": 3 },
      { "ONE HUNDRED": 1 }
    ]);
  });
});

////////////////////////////
const {
    checkCashRegister
} = require('./cashRegister.js');

describe('checkCashRegister', () => {
    test('returns INSUFFICIENT_FUNDS if cash-in-drawer is less than the change due', () => {
        const price = 19.5;
        const cash = 100;
        const cid = [
            ["PENNY", 0.01],
            ["NICKEL", 0.05],
            ["DIME", 0.1],
            ["QUARTER", 4.25],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ];
        console.log(checkAmount(cid));
        expect(checkCashRegister(price, cash, cid)).toEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
    });

    test('returns CLOSED if cash-in-drawer is equal to the change due', () => {
        const price = 19.5;
        const cash = 20;
        const cid = [
            ["PENNY", 0.15],
            ["NICKEL", 0.15],
            ["DIME", 0.2],
            ["QUARTER", 0.00],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ];
        console.log(checkAmount(cid));
        console.log(checkCashRegister(price, cash, cid));
        expect(checkCashRegister(price, cash, cid)).toEqual({ status: "CLOSED", change: cid });
    });

    describe('checkCashRegister', () => {
        test('returns OPEN and the change ', () => {
            const price = 19.5;
            const cash = 50;
            const cid = [
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
            console.log(checkAmount(cid));
            const result = checkCashRegister(price, cash, cid);
            console.log(result);
            expect(result).toEqual({ status: "OPEN", change: [["QUARTER", 0.5]] });
        });
    });
});
