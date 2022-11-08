class App {
  play() {}
}
///////////////////////////////
let playersNumber = [1,4,2];
///////////////////////////////
const computersNumber = []; // 전역변수로 고정

function setComputersNumber() {
  while (computersNumber.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computersNumber.includes(number)) {
    computersNumber.push(number);
  }
}
  console.log(computersNumber)
  return compareNumbers(computersNumber,playersNumber);//(computersNumber, setPlayersNumber());
}

function compareNumbers(computersNumber,playersNumber) {
  let strike = 0;
  let ball = 0;
  const ballCount = [];

  if(playersNumber[0] === playersNumber[1] || playersNumber[1] === playersNumber[2] || playersNumber[0] === playersNumber[2]){
    throw '게임이 종료됩니다.'
  } //setPlayerNumber function에 넣기.

  for(i = 0; i < 3; i++){
    if (computersNumber[i] === playersNumber[i]){
      strike = strike + 1;
    }
    else if (computersNumber[i] === playersNumber[i+1] || computersNumber[i] === playersNumber[i-1]){
      ball = ball + 1
    }
    else if (computersNumber[i] === playersNumber[i+2] || computersNumber[i+2] === playersNumber[i]){
      ball = ball + 1
    } 
  }
  ballCount.push(ball);
  ballCount.push(strike);
  playersNumber = []; //비교가 끝나고 playersNumber 초기화 setPlayersNumber 함수 작성하고 다시 생각
  return resultMessage(ballCount);
}

const checkBall = function(ballCount) {
  if(ballCount[0] === 0){
    return '';
  } else {
    return ballCount[0]+'볼'+' ';
  }
}
const checkStrike = function(ballCount) {
  if(ballCount[1] === 0){
    return '';
  } else {
    return ballCount[1]+'스트라이크';
  }
}


function resultMessage(ballCount) {
  if(ballCount[1] === 3) {
    return console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  } else if(ballCount[0] === 0 && ballCount[1] === 0) {
    return console.log('낫싱');
  } else{
    return console.log(checkBall(ballCount)+checkStrike(ballCount)); //Console.print로 교체
  }
}


/////////////////////////////////////



function setPlayersNumber() {
  const playersNumber = [];
  MissionUtils.Console.readLine('숫자를 입력해주세요 :', (answer) => {
    playersNumber.push(`${answer}`)
    if(playersNumber[0] === playersNumber[1] || playersNumber[1] === playersNumber[2] || playersNumber[0] === playersNumber[2]){
      throw '게임이 종료됩니다.'
    }
    console.log(`'숫자를 입력해주세요 :'${answer}`);
  });
  return playersNumber;
}

module.exports = App;
