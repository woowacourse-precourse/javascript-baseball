const MissionUtils = require("@woowacourse/mission-utils");

function throwError() {
  MissionUtils.Console.close();
  throw new Error('Invalid Input!');
}

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
  return userInputSet.size === userInputArray.length;
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

function userInputCallback(userInputNums, userInputArray) {
  userInputArray = numToArr(userInputNums);
  console.log(userInputArray)
  const isValidFlag = isValidInput(userInputArray);
  if(!isValidFlag) throwError();
  return userInputArray;
}

function getUserInput() {
  let userInputArray = []
  try {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', async (answer) => {
      userInputArray = await userInputCallback(answer, userInputArray)
    })
  } catch(error) {
    throwError();
  }
  return userInputArray
}

function getGameResult(computerRandNumsArray, userInputArray) { 
}

function playGame() {
  const computerRandNumsArray = makeComputerRandNums();
  const userInputArray = getUserInput();
}

class App {
  constructor() {
  }

  play() {
    playGame()
  }
}

module.exports = App;
const a = new App()
a.play();