const makeRandomNumber = () => {
  const targetRandomNumber = [];
  for (let randomNumberIdx = 0; randomNumberIdx < 3; randomNumberIdx++) {
    targetRandomNumber.push(Math.floor(Math.random() * 9 + 1));
  }
  return targetRandomNumber;
};

class App {
  play() {
    let target = [];
    target = makeRandomNumber();

    console.log(target);
  }
}

/** test용 코드 */
const app = new App();
app.play();

module.exports = App;
