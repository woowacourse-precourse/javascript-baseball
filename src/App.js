const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let answers = init();
    console.log(checkInput("123"));
  }
}

const init = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const checkInput = (input) => {
  let str = String(input);
  if (str.length !== 3) {
    return false;
  } else if (isNaN(input)) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (i !== str.indexOf(str[i])) {
      return false;
    }
  }
  return true;
};

const app = new App();
app.play();

module.exports = App;
