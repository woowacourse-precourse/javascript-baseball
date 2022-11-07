// 겟에러에서 에러를 분리하기 위해 두번째로 만든 파일
const MissionUtils = require("@woowacourse/mission-utils");
// const GetError = require("./GetError");

// 겟 에러랑 얘도 똑같이 선언해줬음


// 지금 문제. 앤서 값이 도통 담겨서 넘어오질않음. 하위 파일을 만들어서 분리?? 부모 자식 관계 트리 정리하기??? 대답값을 어케 가져와야 겟에러랑 에러사이에 순환문제가 안생기는데. 그냥 변수명을 같게 해줘서 넘기기??? 같게 넘기기? 이거맞나??? //근데 이제 입력값을 입력하기 전 []그냥 빈 어레이가 들어옴 ㅡㅡ
const errorCondition =  function () {
      let userInputArr = []; 
    // MissionUtils.Console.readLine("에러버전임 숫자를 입력해주세요 : ", (answer) => {
    //   const answerArr = answer.split("").map(Number);
    //   userInputArr.push(answerArr);
      if (userInputArr.length !== 3 ) {
          console.log(userInputArr)
          console.log(userInputArr.length)
        throw new Error("세개만 입력부탁한다!!!!!!!!");
      }
      if (userInputArr[0].every((elem, index, arr) => isNaN(elem) === true)) { // false?
        throw new Error("숫자만 입력부탁쓰.");
      }
    // });
};

errorCondition()
module.exports = errorCondition
// exports.errorCondition = errorCondition;
// exports.userInputArr = userInputArr;
