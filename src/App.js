class App {
  play() {}
}

module.exports = App;

matchNumber()

/**
 * 숫자, 숫자의 위치 일치여부 가려내는 기능 
 * @param {Array} userNums 
 * @param {Array} computerNums 
 */
function matchNumber(userNums, computerNums) {
  let userNumsList = [...userNums];
  let computerNumsList = [...computerNums];

  //userNumList를 돌면서 인덱스와 값을 추출한뒤 computerNumList의 원소들과 매칭하기
  userNumsList.forEach(function (userNum, userIdx) {
    computerNumsList.forEach(function (computerNum, computerIdx) {
      if (userNum == computerNum || userIdx == computerIdx) {
        return "스트라이크";
      } else if (userNum == computerNum) {
        return "볼";
      }
    });
  });
}

 