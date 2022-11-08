const is3Letters = (numStr) => {
    return numStr.length === 3
}

const isOnlyNumber = (numStr) => {
    let check = /^[0-9]+$/;
    return check.test(numStr);
}

const areEachDifferent = (numStr) => {
    for (let i = 0; i < numStr.length; i++) {
        if (numStr.indexOf(numStr[i], i + 1) !== -1) {
            return false
        }
    }
    return true
}

const stringToNumberInList = (list) => {
    return list.split('').map((num) => {
        return parseInt(num);
    });
}

module.exports = {is3Letters, isOnlyNumber, areEachDifferent, stringToNumberInList}