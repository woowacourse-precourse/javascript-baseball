class App {
  play() {

  }
}


function comparingNumbers(inputNum, randomNum) {
  const result = [0, 0];
  const inputNumbers = inputNum.split('').map(item => +item);
  const randomNumbers = String(randomNum).split('').map(item => +item);
  randomNumbers.forEach((number, index) => {
    const inputNumIndex = inputNumbers.indexOf(number);
    if(inputNumIndex === -1) {
      result[0] += 0;
    } else if(inputNumIndex === index) {
      result[1]++;
    } else {
      result[0]++;
    }
  });
  return result;
}

function returnResult(result) {
  const ball = result[0];
  const strike = result[1];
  if(ball === 0 && strike === 0) {
    return '낫싱';
  } else if(ball !== 0 && strike === 0) {
    return `${ball}볼`;
  } else if(ball === 0 && strike !== 0) {
    if(strike < 3) {
      return `${strike}스트라이크`;
    } else {
      return `3스트라이크 
3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
  } else if(ball !== 0 && strike !== 0) {
    return `${ball}볼 ${strike}스트라이크`;
  } 
}

const app = new App();
app.play();
module.exports = App;



