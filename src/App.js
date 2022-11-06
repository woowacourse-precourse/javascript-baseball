class App {
  
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      //console.log(`숫자: ${number}`);
      //예를 들어 정답이 123이면 게임 종료(입출력 인스턴스 종료)
      const arr = Array.from(number);
      MissionUtils.Console.print(arr);
      if(number == '123') MissionUtils.Console.close()
    })
  }
}

const app = new App();
app.play();

module.exports = App;
