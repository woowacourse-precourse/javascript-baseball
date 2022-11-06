const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = pickRandomNumbers();
    
    const game = function() {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
        try{
          judgeInputNumber(answer);
        } catch(error) {
          MissionUtils.Console.print(error);
          MissionUtils.Console.print('게임 종료');
          MissionUtils.Console.close();
          return;
        }
        
        game();
      });
    };
    
    game();
    
  }
}

function pickRandomNumbers() {
  const computer = [];
    while(computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }
  return computer;
}

function comparingNumbers(inputNum, randomNum) {
  const result = [0, 0];
  const inputNumbers = inputNum.split('').map(item => +item);
  randomNum.forEach((number, index) => {
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

function judgeInputNumber(inputNumber) {
  const numbers = inputNumber.split('').map(item => +item);
  if(3 < numbers.length) {
    throw '잘못된 값입니다.';
  } 

  const set = new Set(numbers);
  const numberArr = [...set];
  if(numberArr.length < 3) {
    throw '잘못된 값입니다.';
  }

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 1 || numbers[i] > 9) {
      throw '잘못된 값입니다.';
    }
  
    if(/\D/g.test(numbers[i])) {
      throw '잘못된 값입니다.';
    }
  }

  return inputNumber;
}

const app = new App();
app.play();
module.exports = App;