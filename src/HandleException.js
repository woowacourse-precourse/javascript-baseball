
function handleException(userNum) {
    let userNumMap = new Map();
    checkIsNum(userNum);
    checkIsLength(userNum);
    setMap(userNumMap, userNum);
    checkIsZero(userNumMap);
    checkIsOverlap(userNumMap, userNum);
}

function checkIsNum(userNum) {
    if(Number(userNum) == NaN) {
        throw new Error();
    }
}

function checkIsLength(userNum) {
    if(userNum.length != 3) {
        throw new Error();
    }

}

function setMap(userNumMap, userNum) {
    for(let i = 0; i < userNum.length; i++) {
        if(userNumMap.has(userNum[i]) == false) {
            userNumMap.set(userNum[i], 1);
        }
        else{
            userNumMap.set(userNum[i], userNumMap.get(userNum[i]) + 1);
        }
    }
}

function checkIsZero(userNumMap) {
    if(userNumMap.has(0)) {
        throw new Error();
    }
}

function checkIsOverlap(userNumMap, userNum) {
    for(let i = 0; i < userNum.length; i++) {
        if(userNumMap.get(userNum[i]) > 1) {
            throw new Error();
        }
    }
}

module.exports.handleException = handleException;