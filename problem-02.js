function pandaCost(shingara, somucha, jilapi) {

    //error handling
    if (arguments.length != 3) { return "Please enter three arguments"; }
    if (shingara < 0 || somucha < 0 || jilapi < 0) { return "Please enter a valid number"; }
    if (typeof shingara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number') { return "Please input a valid number"; }
    if (shingara > 500 || somucha > 500 || jilapi > 500) { return "Opps!! Not available for now. Please contact with the chef." }



    const totalShingaraPrice = shingara * 7;
    const totalSomuchaPrice = somucha * 10;
    const totalJilapiPrice = jilapi * 15;

    const totalPrice = totalShingaraPrice + totalSomuchaPrice + totalJilapiPrice;

    return totalPrice;
}

console.log(pandaCost(1500, 200, 1000));
