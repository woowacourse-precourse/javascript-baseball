// const MissionUtils = require("@woowacourse/mission-utils");
const RandomNum = require("./RandomNum");
const computerNum = new RandomNum();
class CompareNumbers {
  comparedUserNum() {
    const splited = computerNum.toString().split("")
    console.log(splited)
    for(let i = 0; i < computerNum.length; i++){
        console.log(computerNum)
    }
  }
}


const compareNumbers = new CompareNumbers();
compareNumbers.comparedUserNum();

module.exports = CompareNumbers;
