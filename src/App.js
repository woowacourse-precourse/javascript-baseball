const printMessage = require("./PrintMessage.js");
const playGame = require("./PlayBaseball.js");

class App {
  play() {
    let isPlayGame = true;
    printMessage.printGameStart();
    while(isPlayGame){
      isPlayGame = playGame.playBaseballGame();
    }
  }
}



const app = new App();
app.play();

/*const MissionUtils = require("@woowacourse/mission-utils");

const getWord = () => {
  return new Promise(resolve => {
    MissionUtils.Console.readLine('닉네임을 입력해주세요.', (userInput) => {
      console.log(`닉네임: ${userInput}`);
      resolve(userInput);
    });
  });
}

function print(){
  getWord().then(input => {
    MissionUtils.Console.close();
    console.log(`입력값은 ${input}`);
  });
}

print();*/

module.exports = App;
