

function gameStart(){
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    console.log(getHint(answer));
    MissionUtils.Console.close();
  });
}

function getHint(){
}

function pickComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log(computer);
}
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    gameStart();
    // console.log('start game !');
    // const MissionUtils = require("@woowacourse/mission-utils");
    // console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

    // MissionUtils.Console.close();
  
  }
  
}

const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();
app.play();
module.exports = App;
