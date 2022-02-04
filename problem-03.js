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

console.log(picnicBudget(120));