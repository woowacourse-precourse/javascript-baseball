function startGame(){
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    // console.log(getHint(answer)); 힌트 출력
    console.log('숫자 :', answer);
    pickComputerNumber();
    MissionUtils.Console.close();
  });
}

function getHint(){
  let hint = '';
  return hint;
}

function endGame(){
  console.log()
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
    if (answer === '1'){
      startGame();
    } else if (answer === '2'){
      MissionUtils.Console.close();
      return;
    } else{
      MissionUtils.Console.print('다시 입력해주세요 !');
      endGame();
    }
  });
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
    startGame();
    // console.log('start game !');
    // const MissionUtils = require("@woowacourse/mission-utils");
    // console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

    // MissionUtils.Console.close();
  
  }
  
}

const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();
// app.play();
endGame();
module.exports = App;
