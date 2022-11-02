/**
 * [기능 목록]
 * - 게임 안내 문구 출력
 * - 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개 선택
 * - 3개의 수가 다 다른지 체크
 * - 플레이어 숫자 입력
 * - 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱 출력
 * - 컴퓨터의 수를 맞추면 게임 종료
 * - 게임 종료 후 다시 시작하려면 1, 종료하려면 2
 */




class App {
  play() {
    console.log('start game !');
    const MissionUtils = require("@woowacourse/mission-utils");

    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
    MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
      console.log(`닉네임: ${answer}`);
    });

    // MissionUtils.Console.close();
  
  }

  pickComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);
  }
  
  
}

const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();
// app.pickComputerNumber();
app.play();
module.exports = App;
