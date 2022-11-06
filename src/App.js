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
    });
  }
}

module.exports = App;
