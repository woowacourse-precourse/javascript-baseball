const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}

/**
 * 기능2. 임의의 수 3개 구현
 */

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
  App,
};
