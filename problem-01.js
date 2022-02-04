//ana to vori
function anaToVori(ana) {

    //error handling
    if (arguments.length != 1) { return "Please enter one argument"; }
    if (ana < 0) { return "Please enter a valid number"; }
    if (typeof ana != 'number') { return "Please input a valid number"; }

    // 1 vori = 16 ana
    const vori = ana / 16;

    return vori;

}

console.log(anaToVori(16));

