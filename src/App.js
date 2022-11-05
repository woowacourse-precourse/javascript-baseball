import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  computerNum() {
    const computerTheeDifferNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  userNum() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      answer = Number(answer);
      if (isThreeDifferNum(answer)) {
        console.log('${answer}\n');
        return answer;
      }
      gameEixt();
    })
  }

  isThreeDifferNum(number) {
    const numArr = Array.from(number);
    const set = new Set(numArr);

    return (number != NaN) && (number.length === 3) && (number.lenth === set.size) ? true : false;
  }

  play() {}
}

const app = new App();
app.play();

export default App;