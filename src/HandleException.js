
function handleException(userNum) {
    let userNumMap = new Map();
    checkIsNum(userNum);
    checkIsLength(userNum);
    setMap(userNumMap, userNum);
    checkIsZero(userNumMap);
    checkIsOverlap(userNumMap, userNum);
}

function checkIsNum(userNum) {
    if(isNaN(userNum)) {
        throw new Error("숫자만 입력해주세요.");
    }
}

function checkIsLength(userNum) {
    if(userNum.length !== 3) {
        throw new Error("숫자 3개를 입력해주세요.");
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
    if(userNumMap.has('0')) {
        throw new Error("0을 제외한 1~9 까지의 숫자만 입력해주세요.");
    }
}

function checkIsOverlap(userNumMap, userNum) {
    for(let i = 0; i < userNum.length; i++) {
        if(userNumMap.get(userNum[i]) > 1) {
            throw new Error("중복되는 숫자를 제외해주세요.");
        }
    }
}

module.exports.handleException = handleException;