const MissionUtils = require("@woowacourse/mission-utils");

class App {
    play() {
        startGuidePrint();
        numberInput();
    }
}

const app = new App();
app.play();

function startGuidePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

function numberInput() {
    MissionUtils.Console.readLine("세자리 숫자를 입력해주세요 : ", inputValidation);
}

function inputValidation(number) {
    threeDigitValidation(number);
}

function threeDigitValidation(number) {
    const numberLength = String(number).length;
    if (numberLength !== 3) {
        throw "잘못된 값을 입력하였습니다.";
    }
}