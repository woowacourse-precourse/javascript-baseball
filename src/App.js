const Render = require("./Render");

function numToArr(num) {
  return [...String(num)];
}

class App {
  play() {
    const render = new Render();

    render.getUser().then((num) => numToArr(num));
  }
}

module.exports = App;
