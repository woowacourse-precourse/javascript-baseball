const MissionUtils = require("@woowacourse/mission-utils");

function printResult(strike,ball){
  if(strike === 0 && ball === 0){
    console.log('낫싱');
  }else if(strike>0 && ball > 0){
    console.log(`${strike}스트라이크 ${ball}볼`);
  }else if(strike>0){
    console.log(`${strike}스트라이크`);
  }else if(ball > 0){
    console.log(`${ball}볼`);
  }
  
  if(strike === 3){
      console.log('정답입니다.')
  }
}


function countStrikeAndBall() {
  let userNum = "123";
  let randomNumber = makeRandom();
  let strike = 0;
  let ball = 0;

  if (userNum !== randomNumber)
  randomNumber.forEach((item, index) => {
    if (item === userNum[index]) {
      strike++;
    } else if (userNum.includes(item)) {
      ball++;
    }
  });

  print(strike,ball);

  return `${strike} and ${ball}`;
}

function makeRandom() {
  let answer = new Array();

  while (answer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answer.includes(number)) {
      answer.push(number);
    }
  }

  console.log(`answer ${answer}`);
  return answer;
}

console.log(countStrikeAndBall());
