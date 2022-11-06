const { Random } = require("@woowacourse/mission-utils");

const GenerateRandomNumbers = () =>{

  const FIRST_NUM = Random.pickNumberInRange(1,9)
  const SECOND_NUM = Random.pickNumberInRange(1,9)
  const THIRD_NUM =  Random.pickNumberInRange(1,9)

  let randomNum = FIRST_NUM.toString() + SECOND_NUM.toString() + THIRD_NUM.toString()
  randomNum = Array.from(randomNum);
  return randomNum;
}
module.exports = GenerateRandomNumbers;