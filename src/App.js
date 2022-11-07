const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.generate_computerNums();

    console.log('숫자 야구 게임을 시작합니다.');

    this.match();
  }

  generate_computerNums() {
    this.computerNums = [];
    while (this.computerNums.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNums.includes(number)) {
        this.computerNums.push(number);
      }
    }
  }

  match() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const playerNums = answer.split('').map(Number);

      this.vaildation_playerNums(playerNums);
      
      if(this.compare(playerNums)) {
        console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.ask_restart();
      } else {
        this.match();
      }
    });
  }

  vaildation_playerNums(nums) {
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

 compare(playerNums) {
    let strike = 0;
    let ball = 0;

    playerNums.forEach((item, idx) => {
      if (this.computerNums.indexOf(item) == idx) strike += 1;
      else if (this.computerNums.indexOf(item) > -1) ball += 1;
    });

    let result;
    if (ball > 0 && strike > 0) result = `${ball}볼 ${strike}스트라이크`;
    else if (ball > 0) result = `${ball}볼`;
    else if (strike > 0) result = `${strike}스트라이크`;
    else result = '낫싱';

    MissionUtils.Console.print(result);

    if (strike == 3) return true;
    else return false;
  }

  ask_restart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => { 
      if(answer === '1') {
        this.generate_computerNums();
        this.match();
      } else if (answer === '2') {
        MissionUtils.Console.print('게임 종료');
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = App;

//new App().play();