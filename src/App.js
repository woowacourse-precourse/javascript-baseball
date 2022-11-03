const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const randomValue=makeRandomValue()
    MissionUtils.Console.print(randomValue);
    MissionUtils.Console.close()
  }
}

const app=new App()
app.play()

function makeRandomValue() {
  const randomValue=[];
  while (randomValue.length<3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomValue.includes(number)) {
      randomValue.push(number)
    }
  }
  return randomValue
}



// module.exports = App;


