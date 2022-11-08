const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

function makeTarget() {
    const tempArr = [];

    while (tempArr.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!tempArr.includes(number)) {
            tempArr.push(number);
        }
    }

    return [...tempArr];
}//random한 3개의 숫자를 배열형태로 return

function handleData(inputArr, targetArr) {
    let [strike, ball] = [0, 0];

    inputArr.forEach((input, idx) => {
        const targetIdx = targetArr.findIndex(target => target === input);
        if (targetIdx === idx) {
            strike += 1;
        }
        else if (targetIdx !== -1) {
            ball += 1;
        }
    })

    return [strike, ball];
}//target과 input의 strike, ball을 return함.

function isValidInput(input) {
    const regex = /^[0-9]+$/;
    if (!regex.test(input) || input.length !== 3) {
        throw new Error("유효한 입력값이 아닙니다.");
    }

    const array = [...input];
    const arraySet = new Set(array);
    if (array.length !== arraySet.size) {
        throw new Error("입력에 중복값이 포함되어 있습니다.");
    }
}

function printResult(countArr) {
    const [strike, ball] = countArr;

    if (strike === 0 && ball === 0) {
        Console.print("낫싱");
        return false;
    }
    else if (ball !== 0 && strike === 0) {
        Console.print(`${ball}볼`);
        return false;
    }
    else if (ball === 0 && strike !== 0) {
        Console.print(`${strike}스트라이크`);
        if (strike === 3) return true;
        else return false;
    }
    else if (ball !== 0 && strike !== 0) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
        return false;
    }
}//ball, strike count에 따라 결과 출력


module.exports = { makeTarget, handleData, isValidInput, printResult }