const MISSION_Utils = require('@woowacourse/mission-utils');
class App {
  play() {
    
  }
  random(){
    let arr = [];
    while (arr.length < 3) {
      const number = MISSION_Utils.Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      } 
    }
  return arr;
  }
}

module.exports = App;
