const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.');
    
    const computerNums = this.generate_computerNums();
    this.match(computerNums);
  }

  generate_computerNums() {
    const computerNums = [];
    while (computerNums.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNums.includes(number)) {
        computerNums.push(number);
      }
    }
    return computerNums;
  }

  match(computerNums) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const playerNums = answer.split('').map(Number);
      this.vaildate_playerNums(playerNums);

      this.compareNums(computerNums, playerNums);

      if (this.isCorrect(computerNums, playerNums)) {
        console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.ask_replay();
      } else {
        this.match(computerNums);
      }
    });
  }

  vaildate_playerNums(nums) {
    if (nums.length !== 3) {
      throw 'Invaild Value: answer of length is not 3!';
    }

    nums.forEach((item) => {
      if (isNaN(item)) {
        throw 'Invaild Value: answer includes Not-A-Number value';
      }
    })

    if (nums.includes(0)) {
      throw 'Invaild Value: answer includes 0';
    }

    const filtered = nums.filter((item, index) => nums.indexOf(item) === index);
    if (filtered.length !== 3) {
      throw 'Invaild Value: there are duplicate values in answer';
    }
  }

 compareNums(computerNums, playerNums) {
    let strike = 0;
    let ball = 0;

    playerNums.forEach((item, idx) => {
      if (computerNums.indexOf(item) == idx) strike += 1;
      else if (computerNums.indexOf(item) > -1) ball += 1;
    });

    let result;
    if (ball > 0 && strike > 0) result = `${ball}볼 ${strike}스트라이크`;
    else if (ball > 0) result = `${ball}볼`;
    else if (strike > 0) result = `${strike}스트라이크`;
    else result = '낫싱';

    MissionUtils.Console.print(result);
  }

  isCorrect(computerNums, playerNums) {
    return computerNums.join('') === playerNums.join('');
  }

  ask_replay() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => { 
      if (answer === '1') {
        const computerNums = this.generate_computerNums();
        this.match(computerNums);
      } else if (answer === '2') {
        MissionUtils.Console.print('게임 종료');
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = App;