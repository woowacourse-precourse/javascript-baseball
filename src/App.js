// 기능요구사항

// - [x] 시작 메세지 출력.
// - [] 랜덤수를 생성한다.
// - [] 숫자를 입력해주세요 메세지 출력.
// - [] 숫자를 입력받는다.
// - [] 스트라이크인지 판별한다.
// - [] 볼인지 판별한다.
// - [] 낫싱인지 판별한다.
// - [] 스트라이크 볼 낫싱을 출력한다.
// - [] 세게의 숫자가 모두 맞으면 종료한다.
// - [] 반복한다.
import MissionUtils from "@woowacourse/mission-utils";

function App() {
  this.play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    recursiveAsyncReadLine();
  };

  this.init = () => {
    this.play();
  };

  const recursiveAsyncReadLine = () => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      MissionUtils.Console.print(number);
      recursiveAsyncReadLine();
    });
  };
}

const app = new App();

app.init();

//module.exports = App;
