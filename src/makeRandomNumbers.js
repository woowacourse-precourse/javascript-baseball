const MissionUtils = require('@woowacourse/mission-utils')

const makeRandomNumbers = () => {
  const numbers = [];
  while(numbers.length < 3){
    const number = MissionUtils.Random.pickNumberInRange(1, 9)
    
    if(numbers.includes(number))continue

    numbers.push(number)
  }
  return numbers
}

module.exports = makeRandomNumbers