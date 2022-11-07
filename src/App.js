const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const computer_nums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player_nums = answer.split('').map(Number);

      try {
        this.vaildation_player_nums(player_nums)
      } catch (e) {
        MissionUtils.Console.close();
        console.error(e);
        return; 
      }

      MissionUtils.Console.close();
    });
  }

  vaildation_player_nums(nums) {
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
}

module.exports = App;