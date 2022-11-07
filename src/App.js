const MissionUtils = require('@woowacourse/mission-utils');
const isVaildNumber = require('./isVaildNumber');
const isVaildEndOption = require('./isVaildEndOption');

class App {
  play() {
    printGameStart();
    playGame(createRandomNumbers());
  }
}

const printGameStart = () => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

const createRandomNumbers = () => {
    let randomNumArr = [];

    while (randomNumArr.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
    return randomNumArr;
}

const inputNumbers = () => {
    let userNum;

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNum) => {
        if (!isVaildNumber(inputNum)) { 
            throw new Error('잘못된 값입니다. 1부터 9까지 서로 다른 3자리 수를 입력하세요.');
        } 
        userNum = inputNum;
    });
    return userNum;
}

const compareWithInput = (computerNumArr, userNum) => {
    let ballCount = 0;
    let strikeCount = 0;
    const computerNum = computerNumArr.join('');

    for(let i = 0; i < computerNum.length; i++) {
        if (userNum.includes(computerNum[i])) {
          ballCount++;
        }
        if (userNum[i] === computerNum[i]) {
          strikeCount++;
      }
    }
    
    ballCount -= strikeCount;

    return [ballCount, strikeCount];
}

const printCompareResult = (ballCount, strikeCount) => {
    let resultMSG = '';

    if (ballCount === 0 && strikeCount === 0) {
        resultMSG = '낫싱';
    } else if (ballCount !== 0  && strikeCount === 0) {
        resultMSG = `${ballCount}볼`;
    } else if (ballCount === 0 && strikeCount !== 0) {
        resultMSG = `${strikeCount}스트라이크`;
    } else {
        resultMSG = `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    MissionUtils.Console.print(resultMSG);
    if (strikeCount === 3) {
        return true;
    }
    return false;
}

const playGame = (computerNumArr) => {
    // 1. 숫자 입력
    const userNum = inputNumbers(); 

    // 2. 숫자 비교 
    const comparedResult = compareWithInput(computerNumArr, userNum);

    // 3. 결과 정답 여부
    const isAnswer = printCompareResult(...comparedResult);
    
    if(isAnswer) { // 정답일 때
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        restartOrQuitGame();
    } else { // 정답이 아닐 때
        playGame(computerNumArr);
    }
}

const restartOrQuitGame = () => {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (endOption) => {
        MissionUtils.Console.print(endOption);
        if (!isVaildEndOption(endOption)) { 
            throw new Error('잘못된 값입니다. 1 또는 2를 입력해주세요.');
        } 
        // 다시 시작
        if (endOption === '1') {
            playGame(createRandomNumbers());
        } 
        // 완전 종료
        if (endOption === '2') {
            MissionUtils.Console.close(); 
        }
    });
}

module.exports = App;
