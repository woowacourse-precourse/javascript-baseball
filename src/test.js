const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};


function countStrikes (computerNum,userInputNum) {
  let totalStrike = 0;
  let com = computerNum;
  let user = userInputNum;
  for (let i = 0; i < com.length ; i++) {
    if(com[i] == user[i]){ 
        totalStrike += 1;
    }
  }
  return totalStrike;
}
function countBalls (computerNum,userInputNum) {
  let totalBall = 0;
  let com = computerNum;
  let user = userInputNum;
  for (let i = 0; i < com.length ; i++) {
    if(com[i] != user[i] && com.includes(user[i])){ 
      totalBall += 1;
    }
  }
  return totalBall;
}    

function compareNumbers (computerNum, userInputNum) {
  let strike = countStrikes(computerNum, userInputNum);
  let ball = countBalls(computerNum, userInputNum);
  if (strike == 0 && ball == 0) {
    MissionUtils.Console.print("낫싱")
    return false
  } else if (strike == 3) {
    MissionUtils.Console.print("3스트라이크");
    return true
  } else if (strike == 0) {            
    MissionUtils.Console.print(`${ball}볼`)
    return false
  } else if (ball == 0) {
    MissionUtils.Console.print(`${strike}스트라이크`)
    return false;
  } 
  MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
  return false;
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};



describe("기능 목록 테스트", () => {
  //2-1
  test("중복된 숫자 포함시 예외 발생", () => {
    const randoms = [1, 2, 3];
    const answers = ["166"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    expect(() => {
        const app = new App();
        app.getUserInputAndPlay(randoms);
    }).toThrow();
  });
  
  //2-2
  test("숫자가 3 이상시 예외 발생", () => {
    const randoms = [1, 2, 3];
    const answers = ["1673"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    expect(() => {
      const app = new App();
      app.getUserInputAndPlay(randoms);
    }).toThrow();
  });
  
  //2-3
  test("0 포함시 예외 발생", () => {
    const randoms = [1, 2, 3];
    const answers = ["103"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.getUserInputAndPlay(randoms);
    }).toThrow();
  });
  
  //3
  test("숫자외 다른 입력시 예외 발생", () => {
    const randoms = [1, 2, 3];
    const answers = ["asd"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.getUserInputAndPlay(randoms);
    }).toThrow();
  });  

  //4-1
  test("스트라이크 숫자 세기", () => {
    const randoms = [1, 2, 3];
    const answers = [1, 6, 3];

    
    expect(countStrikes(randoms,answers)).toEqual(2);
  });
  
  //4-1
  test("볼 숫자 세기", () => {
    const randoms = [1, 2, 3];
    const answers = [2, 3, 1];
    
    expect(countBalls(randoms,answers)).toEqual(3);
  });
  
  //4-2
  test("스트라이크, 볼 비교", () => {
    const randoms = [1, 2, 3];
    const answers = [2, 3, 1];

    expect(compareNumbers(randoms,answers)).toBeFalsy();
  });
  test("3스트라이크시 값", () => {
    const randoms = [1, 2, 3];
    const answers = [1, 2, 3];

    expect(compareNumbers(randoms,answers)).toBeTruthy();
  });

  //5
  test("3스트라이크 아닐시 다시 실행", () => {
    const randoms = [1, 3, 5];
    const answers = ["246", "163"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",      
      "1볼 1스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});