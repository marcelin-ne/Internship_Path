function checkCashRegister(price, cash, cid) {
    let change;
    return change;
  }

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


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

//1. Calcule the amount disponible on the cash register

function checkAmount(cid){
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
    let totalAmount = 0;
    for(let i = 0; i < cid.length; i++){
        totalAmount += cid[i][1];
    }
    return Number(totalAmount.toFixed(2)); // Convertir a número después de limitar a dos decimales
}



//2. Calculate the change to give back
function checkTotalChange(price, cash) {
    const change = cash - price;
    return parseFloat(change.toFixed(2));
}


//3. Check if the cash register has enough money to give back the change and return the message
function compareTotalAndDrawer(price,cash, cid) {

    const totalChange = checkTotalChange(price, cash);
    const totalDrawer = checkAmount(cid);

    // Comparar el total de cambio con el total de dinero en el cajón
    if (totalChange > totalDrawer) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalChange === totalDrawer) {
        return { status: "CLOSED", change: cid };
    } else {
        return { status: "OPEN", change: [] };
    }
}


//4. Calculate the best money combination to acomplish the change
function calculateCoinCounts(amount, currencyUnits) {
    const result = [];

    // Iteramos sobre cada par clave-valor en currencyUnits
    for (const unit in currencyUnits) {
        if (Object.hasOwnProperty.call(currencyUnits, unit)) {
            // Calculamos la cantidad de monedas dividiendo el monto entre el valor de la unidad de moneda
            const count = Math.floor(amount / currencyUnits[unit]);
            // Almacenamos el resultado en el array
            result.push({ [unit]: count });
        }
    }
        // Ordenamos el array resultante de menor a mayor valor
    result.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);
    

    return result;
}





module.exports = { checkTotalChange, checkAmount , compareTotalAndDrawer , calculateCoinCounts};