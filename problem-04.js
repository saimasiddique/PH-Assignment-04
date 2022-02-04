function oddFriend(nameArray) {
    //error handling
    if (arguments.length != 1) { return "Please enter one argument"; }
    if (!Array.isArray(nameArray)) { return "Please enter a valid string array"; }
    for (const element of nameArray) {
        if (typeof element != 'string') {
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

console.log(oddFriend(['qqqq', 'eeee', 'llll', 'ria', 'oooo', 88]));