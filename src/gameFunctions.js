const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 입력한 값이 정확한 값인지 판별하는 기능 필요 (예외처리)
 * 숫자인가? 길이가3인가? 중복된값은 없는가? 등등 잘못된경우 throw로 예외처리
 * @param {string} userNumber 유저가 입력한 값
 */
 function findWrongNumber(userNumber) {
    let set = new Set(userNumber);
    // 숫자가 아니거나, 입력값 길이가 3이 아니거나, 중복값이 있다면
    if (
      /[^1-9]/g.test(userNumber) ||
      userNumber.length !== 3 ||
      userNumber.length !== set.size
    ) {
      throw new Error("잘못된 값을 입력하셨습니다.");
    }
  }
  
  /**
   * 기능2. 2) 입력한 수와 임의의수 비교후 출력, 결과리턴
   * @param {string} randomNumbers makeRandomNumbers 함수를 통해서 랜덤한 수 생성
   * @param {string} userNum 사용자가 입력한 수
   * @param {Function} matchNumber 콜백함수 matchNumber (숫자비교)
   * @returns {string} 비교이후 결과 리턴
   */
  
  function playBaseball(randomNumbers, userNum, matchNumber) {
    const result = matchNumber(userNum, randomNumbers); // user입력값과 임의의수 매칭 결과값
    MissionUtils.Console.print(result);
    return result;
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
     * strike와  ball 여부확인,
     */
    userNumsList.forEach(function (userNum, userIdx) {
      computerNumsList.forEach(function (computerNum, computerIdx) {
        userNum === computerNum && userIdx === computerIdx
          ? matchResult.strike++
          : userNum === computerNum
          ? matchResult.ball++
          : null;
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
  
  /**
   * 야구게임을 3스트라이크가 될때까지 반복하는 기능
   * @param {string} randomNumber 맞출 임의의수
   */
  function repeatGame(randomNumber) {
    let result;
  
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      //입력값이 잘못된 값인가 확인
      findWrongNumber(answer);
      result = playBaseball(randomNumber, answer, matchNumber);
  
      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        randomNumber = makeRandomNumbers();
        MissionUtils.Console.readLine(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
          (answer2) => {
            if (answer2 === "2") {
              MissionUtils.Console.close();
            } else if (answer2 !== "1") {
              throw new Error("잘못된 값을 입력하셨습니다.");
            }
          }
        );
      }
      repeatGame(randomNumber);
    });
  }

  module.exports = {
    findWrongNumber,
    playBaseball,
    makeRandomNumbers,
    matchNumber,
    repeatGame

  }
