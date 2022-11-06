const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
function numToArr(num) {
  return [...String(num)];
}

class App {
  play() {
    const render = new Render();

    render.getUser().then((num) => {
      this.num = numToArr(num);
      const checkInputValid = new CheckInputValid({
        userNum: this.userNum,
      });
      try {
        checkInputValid.checkValidation();
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}

module.exports = App;
