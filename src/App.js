const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() { }

  computerPick() { // 컴퓨터가 1부터 9 사이의 서로다른 3개의 숫자를 정하는 메서드
    const COMPUTER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return COMPUTER;
  }
  playerPick(computer) { // 게임 플레이어의 입력을 받고, 컴퓨터와 비교하는 메서드
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (!this.checkNumber(input)) {
        throw new Error();
      }
      const result = this.baseball(computer, input);
      if (!result) {
        this.playerPick(computer);
      } else if (result) {
        this.checkReplay();
      }
    });
  }
  checkNumber(num) { // 플레이어가 입력한 숫자가 서로 다른 3개의 숫자인지 확인하는 메서드
    if (isNaN(num)) {
      return false;
    } else if (num.length !== 3) {
      return false;
    } else if ((num[0] === num[1]) || (num[0] === num[2]) || (num[1] === num[2])) {
      return false;
    }
    return true;
  }
  baseball(computer, player) { // 플레이어가 입력한 숫자와 컴퓨터의 숫자를 비교하여 결과를 출력하는 메서드
    let strike = 0;
    let ball = 0;
    const PLAYER = [];
    for (let i = 0; i < 3; i++) {
      PLAYER.push(parseInt(player[i]));
    }
    for (let i = 0; i < 3; i++) {
      if (this.compare(computer, computer[i], PLAYER[i]) === 1) {
        strike += 1;
      } else if (this.compare(computer, computer[i], PLAYER[i]) === 2) {
        ball += 1;
      }
    }
    let result = '';
    if (ball !== 0) {
      result += `${ball}볼`;
    }
    if (strike !== 0) {
      if (result !== '') {
        result += ' ';
      }
      result += `${strike}스트라이크`;
    }
    if ((ball === 0) && (strike === 0)) {
      result = '낫싱';
    }
    MissionUtils.Console.print(result);
    if (strike === 3) {
      return true;
    }
    return false;
  }
  compare(array, num1, num2) { // 플레이어가 입력한 숫자가 컴퓨터의 숫자에 포함되어 있는지, 같은 자리인지 확인하는 메서드
    if (array.includes(num2)) {
      if (num1 === num2) {
        return 1;
      }
      return 2;
    }
    return;
  }
  checkReplay() { // 게임의 재시작 여부를 묻는 메서드
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (replayInput) => {
      const REPLAY = this.replay(replayInput);
      if (REPLAY) {
        MissionUtils.Console.close();
      }
    });
  }
  replay(input) { // 게임을 재시작하는 메서드
    if (!this.checkReplayInput(input)) {
      throw new Error();
    } else if (input === '1') {
      const COMPUTER_NUM = this.computerPick();
      try {
        this.playerPick(COMPUTER_NUM);
      } catch (error) {
        throw new Error();
      }
    } else if (input === "2") {
      return true;
    }
  }
  checkReplayInput(num) { // 게임 종료 후 재시작 여부에 대한 입력값을 확인하는 메서드
    if ((num === '1') || (num === '2')) {
      return true;
    }
    return false;
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const COMPUTER_NUM = this.computerPick();
    try {
      this.playerPick(COMPUTER_NUM);
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = App;
