const MissionUtils = require("@woowacourse/mission-utils");

function makeComputerRandNums() {
  const randNumsArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  return randNumsArr;
}

function isLengthThree(userInputArray) {
  return userInputArray.length === 3;
}

function isValidNumber(userInputArray) {
  const returnBool = userInputArray.every((element) => {
    return element >= '1' && element <= '9';
  });
  return returnBool;
}


function isSameNumber(userInputArray) {
  const userInputSet = new Set(userInputArray);
  return userInputSet.length === userInputArray.length;
}

function isValidInput(userInputArray) {
  let returnIsValid = [true, true, true];
  returnIsValid[0] = isLengthThree(userInputArray);
  returnIsValid[1] = isValidNumber(userInputArray);
  returnIsValid[2] = isSameNumber(userInputArray);
  
  const returnBool = returnIsValid.every((element) => {
    return element;
  });
  return returnBool;
}

function numToArr(userInputNums) {
  const userInputArray = userInputNums.split('');
  return userInputArray;
}

function getUserInput() {
  let userInputArray = [];
  let isValidFlag = true;
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInputNums) => {
    userInputArray = numToArr(userInputNums);
    isValidFlag = isValidInput(userInputArray);
  })
  return userInputArray;
}

function playGame() {
  while (true) {
    const computerRandNumsArray = makeComputerRandNums();
    const userInputArray = getUserInput();
    const gameResult = getGameResult(computerRandNumsArray, userInputArray);
  }
}

class App {
  constructor() {
  }

  play() {
    playGame();
  }
}

module.exports = App;
const a = new App()
a.play();