const { Random } = require("@woowacourse/mission-utils");
const { NUM_SIZE } = require('./Constants');

function computerInput(){
    const computer = [];
    while (computer.length < NUM_SIZE) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
}

module.exports = { computerInput };