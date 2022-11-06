console.log("hi");

const MissionUtils = require("@woowacourse/mission-utils");

function makeRandom() {
  let answer = new Array();

 
  while (answer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}


console.log(makeRandom());

// class App {
//   play() {
//     this.randomNumber = this.makeRandom();
//   }

//   makeRandom() {
//     let answer = new Array();

//     while (ades(number)) {
//         answer.push(numnswer.length < 3) {
//       const number = MissionUtils.Random.pickNumberInRange(1, 9);
//       if (!answer.incluber);
//       }
//     }

//     return answer;
//   }
// }

// const app = new App();
// console.log(app.makeRandom());
// module.exports = App;
