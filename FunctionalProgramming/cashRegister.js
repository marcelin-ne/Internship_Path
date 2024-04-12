// function checkCashRegister(price, cash, cid) {
//     let change;
//     return change;
//   }

//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONEHUNDRED": 100
};

//1. Calcule the amount disponible on the cash register

function checkAmount(cid){
    const currencyUnits = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    };
    let totalAmount = 0;
    for(let i = 0; i < cid.length; i++){
        cid[i][1] = cid[i][1] * 100; // Convertir a centavos
        console.log(cid[i][1]);
        totalAmount += cid[i][1];
        console.log(totalAmount);
    }
    return Number(totalAmount.toFixed(2)); // Convertir a número después de limitar a dos decimales
}

const cidExample = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100] ];

    checkAmount(cidExample);

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

//5. Check the number of coins in the cash register per unit
function checkCoinCount(cid) {
    const result = [];
    for (let i = 0; i < cid.length; i++) {
        result.push({ [cid[i][0]]: Math.floor(cid[i][1] / currencyUnits[cid[i][0]]) });
    }
    return result;
}


function checkCashRegister(price, cash, cid) {
    let totalChange = checkTotalChange(price, cash);
    console.log("1.totalChange",totalChange);
    const drawerStatus = compareTotalAndDrawer(price, cash, cid);
    console.log("2.drawerStatus",drawerStatus);
    const changeCombination = calculateCoinCounts(totalChange, currencyUnits);
    console.log("3.changeCombination",changeCombination);
    const availableCoins = checkCoinCount(cid);
    console.log("4.availableCoins",availableCoins);
    // Print values of availableCoins
    console.log("avaible coin values", availableCoins[1]["PENNY"]); // Ejemplo para la moneda "PENNY"

    const change = [];
    
    sumChange(availableCoins);

        console.log("10.Change:", change);
        return { status: "OPEN", change: change };
    }


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONEHUNDRED", 100]]) 
module.exports = { checkTotalChange, checkAmount , compareTotalAndDrawer , calculateCoinCounts ,checkCoinCount , checkCashRegister};


function sumChange ( availableCoins ){
    let sum = 0;
    for (let i=0 ; i < availableCoins.length; i++){
        for (let j=0 ; j < availableCoins[i].value; j++){
            console.log("availableCoins[i].values", availableCoins[i]);
    } 
}
    return sum;
}