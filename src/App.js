const MissionUtils = require("@woowacourse/mission-utils");

function createRandNum() {
  let randNum = "";

  for (let i = 0; i < 3; i++) {
    let randNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let tempNum = MissionUtils.Random.pickNumberInList(randNumList);
    randNum += String(tempNum);
    randNumList.pop(tempNum);
  }
  // console.log(randNum, 'random number 생성');
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  return randNum
}

class App {
  play() {
    // 1. 컴퓨터가 정답(1-9 사이의 서로 다른 수로 이루어진 3자리 숫자)을 생성한다.
    const randNum = createRandNum();
  }
}

module.exports = App;