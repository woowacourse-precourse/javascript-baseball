const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const setting = require("../src/Setting");


const startGame = (computer) => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      let hint = '';
      if (setting.checkInput(userInput) && setting.checkInput(computer.join(''))) {
        const userInputArray = setting.getInputIntArray(userInput);
        hint = getHint(userInputArray, computer);
      } else {
        throw new Error('숫자가 올바르지 않습니다. 다시 입력해주세요 !');
      }
  
      MissionUtils.Console.print(hint);
      if (hint === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        endGame();
      } else {
        startGame(computer);
      }
    });
};
  


const endGame = () => {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
        if (answer === '1') {
            const app = new App();
            app.play();
        } else if (answer === '2') {
            MissionUtils.Console.close();
            return;
        } else {
            endGame('다시 입력해주세요 !');
        }
    });
};


const getHint = (userInputArray, computer) => {
    let hint = '';
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userInputArray.length; i++) {
        let idx = -1;
        idx = computer.indexOf(userInputArray[i]);
        if (idx === i) {
            strike++;
        } else if (idx > -1) {
            ball++;
        }
    }

    if (strike || ball) {
        if (ball > 0) {
            hint += `${ball}볼 `;

        } if (strike > 0) {
            hint += `${strike}스트라이크`;
        }
    } else {
        hint = '낫싱';
    }

    return hint;
};

const pickComputerNumber = () => {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer;
};


describe("숫자야구 함수 테스트", () => {
    test("숫자문자열을 int배열로 만들어 반환", () => {
        const input = "123";
        const result = setting.getInputIntArray(input);

        expect(result).toEqual([1, 2, 3]);
    });

    test("input길이가 3 아니면 false 반환", () => {
        const input = "12345";
        const result = setting.checkInput(input);
        expect(result).toEqual(false);
    });

    test("input이 숫자로 된 문자열이 아니면 false 반환", () => {
        const input = "abc";
        const result = setting.checkInput(input);
        expect(result).toEqual(false);
    });

    test("컴퓨터 숫자가 입력값 조건에 안맞으면 false 반환", () => {
        const input = pickComputerNumber();
        const result = setting.checkInput(input);
        expect(result).toEqual(false);
    });

    test("입력값과 컴퓨터값을 비교해 힌트 주기", () => {
        const input = [1, 2, 3];
        const computer = [1, 3, 5];
        const result = getHint(input, computer);
        expect(result).toEqual("1볼 1스트라이크");
    });
});


