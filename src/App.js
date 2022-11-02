const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log(getRandomArray());
  }
}

const getRandomArray = () => {
  const randomArray = [];
  while (randomArray.length < 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomArray.includes(random)) {
      randomArray.push(random);
    }
  }

  return randomArray;
}

module.exports = App;

const app = new App();
app.play();