/* Problem-01:anaToVori */

function anaToVori(ana) {

    //error handling
    if (arguments.length != 1) { return "Please enter one argument"; }
    if (ana < 0) { return "Please enter a valid number"; }
    if (typeof ana != 'number') { return "Please input a valid number"; }

    // 1 vori = 16 ana
    const vori = ana / 16;

    return vori;
}
//console.log(anaToVori(16));

/* Problem-02: pandaCost */

function pandaCost(shingara, somucha, jilapi) {

    //error handling
    if (arguments.length != 3) { return "Please enter three arguments"; }
    if (shingara < 0 || somucha < 0 || jilapi < 0) { return "Please enter a valid number"; }
    if (typeof shingara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number') { return "Please input a valid number"; }


    const totalShingaraPrice = shingara * 7;
    const totalSomuchaPrice = somucha * 10;
    const totalJilapiPrice = jilapi * 15;

    const totalPrice = totalShingaraPrice + totalSomuchaPrice + totalJilapiPrice;

    return totalPrice;
}
//console.log(pandaCost(100, 200, 150));

/* Problem-03:picnicBudget */

function picnicBudget(numberOfParticipants) {

    //error handling
    if (arguments.length != 1) { return "Please enter three arguments"; }
    if (numberOfParticipants < 0) { return "Please enter a valid number"; }
    if (typeof numberOfParticipants != 'number') { return "Please input a valid number"; }

    let totalCost;
    if (numberOfParticipants <= 100) {
        totalCost = numberOfParticipants * 5000;
    }
    else if (numberOfParticipants > 100 && numberOfParticipants <= 200) {
        const first100ParticipantsCost = 100 * 5000;
        const remainingParticipantsCost = (numberOfParticipants - 100) * 4000;
        totalCost = first100ParticipantsCost + remainingParticipantsCost;

    }
    else if (numberOfParticipants > 200) {
        const first100ParticipantsCost = 100 * 5000;
        const second100ParticipantsCost = 100 * 4000;
        const remainingParticipantsCost = (numberOfParticipants - 200) * 3000;
        totalCost = first100ParticipantsCost + second100ParticipantsCost + remainingParticipantsCost;
    }

    return totalCost;

}

//console.log(picnicBudget(120));


/* Problem-04:oddFriend */

function oddFriend(nameArray) {
    //error handling
    if (arguments.length != 1) { return "Please enter one argument"; }
    if (!Array.isArray(nameArray)) { return "Please enter a valid string array"; } //input should be array type
    for (const element of nameArray) {
        if (typeof element != 'string') {                                     //elements should be string type
            return element + ' has a type issue. ' + "Please enter valid name";
        }
    }

    let flag = 0;
    for (const element of nameArray) {

        if (element.length % 2 != 0) {
            flag = 1;
            return element;
        }

    }

    if (flag == 0) { return "There is no odd friend's name."; }
}

//console.log(oddFriend(['raha', 'siam', 'fatima', 'ria', 'tashu']));