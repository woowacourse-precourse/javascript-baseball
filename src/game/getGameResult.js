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