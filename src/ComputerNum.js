const MissionUtils = require("@woowacourse/mission-utils");

// class RandomNum {
//   constructor(randomNumArr) {
//     this.randomNumArr = randomNumArr;
//   }

//   creatNum() {
//     const computerNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
//     console.log(computerNumArr);
//     return computerNumArr;
//   }
// }

// const randomNum = new RandomNum();
// randomNum.creatNum();





const computerNum = function () {
    const pickedNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    randomNumArr.push(pickedNum)

    console.log(`\n \n ${randomNumArr} `)
};

let randomNumArr = [];
computerNum();

exports.computerNum = computerNum;
exports.randomNumArr = randomNumArr;






