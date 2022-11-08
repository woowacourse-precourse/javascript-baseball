const App = require("../src/App.js");
const MissionUtils = require("@woowacourse/mission-utils");

describe("기능 구현 테스트", () => {

  test("숫자 야구 게임 예외사항이 없을때.", () => {

    const detectError = (user) => {
      user = removeRepeated(user);
  
      if (detectStringError(user)) {
        if (user.length !== 3) {
          return -1;
        }
      }
  
      return 1;
    }
  
    const detectStringError = (user) => {
      user = [...user];
      user.forEach((element) => {
        if (!(element >= "1" && element <= "9")) {
          return -1;
        }
      });
  
      return 1;
    }
  
    const removeRepeated = (user) =>{
      const set = new Set([...user]);
      user = [...set];
      return user;
    }

    const result = detectError('123');
    expect(result).toEqual(1);
  });

  test("숫자 야구 게임 예외사항이 존재할때.", () => {

    const detectError = (user) => {
      user = removeRepeated(user);
  
      if (detectStringError(user)) {
        if (user.length !== 3) {
          return -1;
        }
      }
  
      return 1;
    }
  
    const detectStringError = (user) => {
      user = [...user];
      user.forEach((element) => {
        if (!(element >= "1" && element <= "9")) {
          return -1;
        }
      });
  
      return 1;
    }
  
    const removeRepeated = (user) =>{
      const set = new Set([...user]);
      user = [...set];
      return user;
    }

    const result = detectError('1234');
    expect(result).toEqual(-1);
  });

  test("스트라이크/ 볼 개수 찾아내기", () => {

    const getStrikeAndBall = (user, computer) => {
      user = [...user];
      computer = [...computer];
  
      let idx = 0;
      let strike = 0;
      let ball = 0;
      user.forEach((element) => {
        if (computer.includes(element) && element === computer[idx]) { 
          strike += 1 
        } else if (computer.includes(element) && element !== computer[idx]) { 
          ball += 1 
        }
        idx += 1;
      });
  
      return [strike, ball];
    }

    const nothing = getStrikeAndBall('123', '456');
    expect(nothing).toEqual([0,0]);
    let result = [];
    // result = getStrikeAndBall('123', '123');
    // expect(result).toEqual([3,0]);

    // result = getStrikeAndBall('123', '312');
    // expect(result).toEqual([0,3]);
    
    // result = getStrikeAndBall('123', '124');
    // expect(result).toEqual([2,0]);

    result = getStrikeAndBall('123', '819');
    expect(result).toEqual([0,1]);

  });




});
