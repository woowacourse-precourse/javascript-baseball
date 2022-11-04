const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerRandomNumber = getComputerNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    getUserInput(computerRandomNumber);
  }
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

function getUserInput(computerRandomNumber) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    if (!validUserInput(input)) {
      throw new Error('사용자의 입력이 올바르지 않습니다.');
    }

    const userInputNumber = strToIntArr(input);
    const gameResult = getResult(computerRandomNumber, userInputNumber);
    const isWin = winOrLose(gameResult);

    if (isWin) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      newGame();
    }
    getUserInput(computerRandomNumber);
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

function newGame() {
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  MissionUtils.Console.readLine('', (input) => {
    if (input == 2) {
      return MissionUtils.Console.close();
    }
    else if (input == 1) {
      const computerRandomNumber = getComputerNumber();
      getUserInput(computerRandomNumber);
    }
    else {
      throw new Error('올바르지 않은 입력입니다.');
    }
  })
}

function validUserInput(str) {
  const reg = /^[0-9]+$/;
  return (str.length == 3 && reg.test(str));
}

module.exports = App;
