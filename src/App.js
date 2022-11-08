const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
} 

/**
 * 기능2. 2) 숫자 입력 기능 함수 , 입력기능 + 입력한 수와 임의의수 비교후 출력, 결과리턴
 * @param {string} randomNumbers 유저가 맞춰야될 임의의수 
 * @param {Function} matchNumber 콜백함수 matchNumber (비동기 방지)
 * @returns {string} 비교이후 결과 리턴
 * @todo 잘못된 값(예외처리) 기능추가를 여기에 추가 해야 할지도 모름
 */
function inputAndPlay(randomNumbers, matchNumber) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
    
    // @todo 잘못된 값을 찾는 기능 자리 , 결과에 따라 예외 발생

    const result = matchNumber(answer, randomNumbers); // user입력값과 임의의수 매칭 결과값
    MissionUtils.Console.print(result);
    MissionUtils.Console.close();
    return result;
  });
}

/**
 * 기능2. 1) 길이가3인 임의의 수 만드는 기능 구현
 * @returns {string} 임의의 1~9까지의 길이가 3인 숫자 문자열
 */
function makeRandomNumbers() {
  let tempList = []; //임의의 수를 담을 빈 리스트
  let i = 0;
  while (i < 3) {
    const tempNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    const overlapFind = tempList.find((element) => element == tempNumber);

    overlapFind ? i-- : tempList.push(tempNumber);
    i++;
    tempList.push();
  }
  return tempList.join("");
}

/**
 * 기능1. 숫자, 숫자의 위치 일치여부 가려내는 기능
 * @param {string} userNums 유저의 숫자
 * @param {string} computerNums 맞출 임의의 숫자
 * @returns {string}결과값에 따른 리턴값 예) 2스트라이크 1볼, 낫싱, 2볼, 3스트라이크
 */
function matchNumber(userNums, computerNums) {
  let userNumsList = [...userNums];
  let computerNumsList = [...computerNums];

  // 스트라이크와 볼 카운트 세는 오브젝트
  let matchResult = {
    strike: 0,
    ball: 0,
  };

  /**
   * userNumList를 돌면서 인덱스와 값을 추출한뒤 computerNumList의 원소들과 매칭하기
   * strike와  ball 여부확인
   */
  userNumsList.forEach(function (userNum, userIdx) {
    computerNumsList.forEach(function (computerNum, computerIdx) {
      if (userNum === computerNum && userIdx === computerIdx) {
        matchResult.strike++;
      } else if (userNum === computerNum) {
        matchResult.ball++;
      }
    });
  });

  // result를 보고 스트라이크, 볼, 혹은 완전 불일치여부 확인후 결과 문자열 리턴
  if (matchResult.strike === 0 && matchResult.ball === 0) {
    return "낫싱";
  } else {
    const result = `${matchResult.ball ? matchResult.ball + "볼 " : ""}${
      matchResult.strike ? matchResult.strike + "스트라이크" : ""
    }`;
    return result.trim();
  }
}
// Test를 위한 exports 코드
module.exports = {
  matchNumber,
  makeRandomNumbers,
  inputAndPlay,
  App,
};
