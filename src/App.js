const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComNum() {
    // 1. 컴퓨터 랜덤숫자 생성
    // return: [0,0,0]
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let set = new Set();

    while (set.size != 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (num !== 0) set.add(num);
    }
    return [...set];
  }

  checkNum(input, comNum) {
    // 3. ball/strike 세기
    // 인수: input - User입력, comNum - com 랜덤숫자[0,0,0]
    // return: [ball의 갯수, strike의 갯수]
    let answerCount = [0, 0];
    if (input.length !== 3) throw new Error("잘못된 입력입니다.");

    for (let i = 0; i < 3; i++) {
      let val = +input[i];
      if (!(1 <= val && val <= 9)) {
        throw new Error("잘못된 입력입니다.");
      } else if (comNum[i] == val) {
        answerCount[1]++;
      } else if (comNum.indexOf(val) !== -1) {
        answerCount[0]++;
      }
    }
    return answerCount;
  }

  answer(answerCount) {
    // 4. print 문구 만들기
    // 인수: answerCount - [ball의 갯수, strike의 갯수]
    // return: ex. "낫싱", "1스트라이크"...
    if (answerCount[0] == 0 && answerCount[1] == 0) {
      return "낫싱";
    } else if (answerCount[0] == 0) {
      return `${answerCount[1]}스트라이크`;
    } else if (answerCount[1] == 0) {
      return `${answerCount[0]}볼`;
    } else {
      return `${answerCount[0]}볼 ${answerCount[1]}스트라이크`;
    }
  }

  play() {}
}

module.exports = App;
