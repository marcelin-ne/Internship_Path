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