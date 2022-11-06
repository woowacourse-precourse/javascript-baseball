class App {
  makeRandomNumber(){
    const MissionUtils = require("@woowacourse/mission-utils");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
  }
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      //console.log(`숫자: ${number}`);
      //예를 들어 정답이 123이면 게임 종료(입출력 인스턴스 종료)
      const playerArr = Array.from(number).map((i) => Number(i));;
      MissionUtils.Console.print(playerArr);
      const answer = this.makeRandomNumber();
      MissionUtils.Console.print(answer);
      if(number == '000') MissionUtils.Console.close()
    })
  }
}

const app = new App();
app.play();

module.exports = App;
