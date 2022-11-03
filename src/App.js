const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

function getComputerNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }

  return computerNumber;
}

function getUserInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    MissionUtils.Console.close();
  })
}

function strToIntArr(str) {
  const strArr = [...str];
  const intArr = [];

  strArr.forEach((item) => intArr.push(parseInt(item)));

  return intArr;
}

function getResult(comArr, userArr) {
  let resultArr = [0, 0] // resultArr[0] = Ball, resultArr[1] = Strike
  for (let i = 0; i < comArr.length; i++) {
    if (comArr[i] == userArr[i]) {
      resultArr[1] += 1;
    }
    
    if (comArr.includes(userArr[i]) && comArr[i] != userArr[i]) {
      resultArr[0] += 1;
    }
  }

  return resultArr;
}

function winOrLose(resultArr) {
  if (resultArr[0] == 0 && resultArr[1] == 0) {
    MissionUtils.Console.print("낫싱");
    return false;
  }
  else if (resultArr[0] == 0 && resultArr[1] != 0) {
    MissionUtils.Console.print(`${resultArr[1]}스트라이크`);
    if (resultArr[1] == 3) {
      return true;
    }
    return false;
  }
  else if (resultArr[1] == 0 && resultArr[0] != 0) {
    MissionUtils.Console.print(`${resultArr[0]}볼`);
    return false;
  }
  else {
    MissionUtils.Console.print(`${resultArr[0]}볼 ${resultArr[1]}스트라이크`);
    return false;
  }
}

module.exports = App;
