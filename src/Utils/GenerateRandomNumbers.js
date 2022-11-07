const { Random } = require("@woowacourse/mission-utils");

function GenerateRandomNumbers(){
  let numSet = new Set();
  while(numSet.size !=3){
  let num = Random.pickNumberInRange(1,9);
  numSet.add(num);
  }
  console.log(numSet)
  
  let random = Array.from(numSet).join('');
  random = Array.from(random)
  
  console.log(random)
  return random;
}
module.exports = GenerateRandomNumbers;