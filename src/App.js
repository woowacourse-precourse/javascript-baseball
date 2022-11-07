const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');

class App {
  play() {
    // 컴퓨터에 랜덤 숫자 3자리 중복되지 않도록 저장
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    // 게임 시작 문구 출력
    MissionUtils.Console.print(Messages.START);

    // 사용자 숫자 입력
    MissionUtils.Console.readLine(Messages.INPUT_NUMBER, (number) => {
      const numberRegExp = new RegExp(/[0-9]/g);
      if (number.length !== 3 || !numberRegExp.test(number)) {
        throw new Error(Messages.ERROR.NUMBER_RANGE);
      } else {
        const checkCount = [0, 0, 0];
        const splittedNumbers = number.split('').map(Number);
        splittedNumbers.forEach((splittedNumber, index) => {
          if (computer[index] === splittedNumber) checkCount[0]++;
          else if (computer.includes(splittedNumber)) checkCount[1]++;
          else checkCount[2]++;
        });

        let result = '';
        const [strike, ball, out] = checkCount;
        if (ball > 0) result += `${ball}볼 `;
        if (strike > 0) result += `${strike}스트라이크`;
        if (out === 3) result += `낫싱`;
        MissionUtils.Console.print(result);
      }
    });
  }
}
const app = new App();
app.play();

module.exports = App;
