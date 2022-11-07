const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const inputNumber = answer.split('').map(Number);

      try {
        this.vaildation(inputNumber)
      } catch (e) {
        MissionUtils.Console.close();
        console.error(e);
        return; 
      }

      MissionUtils.Console.close();
    });
  }

  vaildation(inputNumber) {
    if(inputNumber.length != 3) throw 'Invaild Value: answer of length is not 3!';

    for(const item of inputNumber) {
      if(isNaN(item)) throw 'Invaild Value: answer includes Not-A-Number value';
    }

    if(inputNumber.includes(0)) throw 'Invaild Value: answer includes 0';

    const filtered = inputNumber.filter((item, index) => inputNumber.indexOf(item) === index);
    if(filtered.length != 3) throw 'Invaild Value: there are duplicate values in the answer';
  }
}

module.exports = App;