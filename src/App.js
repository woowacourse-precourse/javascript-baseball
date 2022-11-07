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
  const tmpArray = userInputNums.split('');
  const userInputArray = tmpArray.map(element => Number(element));
  return userInputArray;
}

function userInputCallback(userInputNums, userInputArray) {
  userInputArray = numToArr(userInputNums);
  const isValidFlag = isValidInput(userInputArray);
  if(!isValidFlag) throwError();
  return userInputArray;
}

function getStrikeCount(computerRandNumsArray, userInputArray) {
  let cnt = 0;
  userInputArray.forEach((element, index) => {
    if(computerRandNumsArray[index]===element) cnt += 1;
  })
  return cnt;
}

function getBallCount(computerRandNumsArray, userInputArray) {
  let cnt = 0;
  userInputArray.forEach((element, index) => {
    if(computerRandNumsArray[index]!==element
      && computerRandNumsArray.includes(element)) cnt += 1;
  })
  return cnt;
}

function getGameResult(computerRandNumsArray, userInputArray) {
  let ballCount = getBallCount(computerRandNumsArray, userInputArray);
  let strikeCount = getStrikeCount(computerRandNumsArray, userInputArray);

  // console.log(computerRandNumsArray)
  if(strikeCount === 3) {
    MissionUtils.Console.print('3스트라이크');
    return false;
  }
  if(ballCount && strikeCount) {
    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    return true;
  }
  if(ballCount) {
    MissionUtils.Console.print(`${ballCount}볼`);
    return true;
  }
  if(strikeCount) {
    MissionUtils.Console.print(`${strikeCount}스트라이크`);
    return true;
  }
  MissionUtils.Console.print('낫싱');
  return true;
}

function restartGame() {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', 
    async (answer) => {
      const computerRandNumsArray = makeComputerRandNums();
      if(answer === '1') playGame(computerRandNumsArray);
      else if(answer === '2') MissionUtils.Console.close();
      else throwError();
  })
}

function playGame(computerRandNumsArray) {
  try {
    let gameMustGoOn = true;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', async (answer) => {
      let userInputArray = [];
      userInputArray = await userInputCallback(answer, userInputArray);
      gameMustGoOn = getGameResult(computerRandNumsArray, userInputArray);
      if(gameMustGoOn) playGame(computerRandNumsArray);
      else restartGame();
    })
  } catch(error) {
    throwError();
  }
  return
}


function playApp() {
  const gameResult = playGame();
}

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  }

  play() {
    const computerRandNumsArray = makeComputerRandNums();
    playGame(computerRandNumsArray)
  }
}

module.exports = App;
// const a = new App()
// a.play();