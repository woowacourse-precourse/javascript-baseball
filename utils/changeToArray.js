function changeToArray(number) {
    return number
        .toString()
        .split("")
        .map((num) => parseInt(num), 10);
}

module.exports = changeToArray;
