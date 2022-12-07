const { Random } = require('@woowacourse/mission-utils') 

const numberGenerator = {
randomNumber(){
  const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1,9);
      if(computer.includes(number)) {
        continue;
      }
      computer.push(number);
    }

  return computer; 
  }
}

module.exports = numberGenerator;