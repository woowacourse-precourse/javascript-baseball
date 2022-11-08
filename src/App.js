import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    const answer = MissionUtils.Random.pickNumberInRange(111, 999);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let isGamePlaying = true;
    while (isGamePlaying) {
      startGame();
      isGamePlaying = false;
    }
  }
}
async function startGame() {
  try {
    const userNumber = await getUserNumber();
  } catch (error) {
    MissionUtils.Console.print(
      `잘못된 입력입니다. 게임을 종료합니다.: ${error}`
    );
    restartOrExit(2);
  }
}
function getUserNumber() {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      resolve(input);
    });
  });
}
function restartOrExit(input) {
  if (input == 1) return true;
  else return false;
}

const app = new App();
app.play();

export default App;
