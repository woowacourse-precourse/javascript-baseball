const numberCompare = require('./NumberCompare');
const computerNumber = require('./computerNumber');
const throwHandling = require('./ThrowHandling');
const MissionUtils = require("@woowacourse/mission-utils");

const selectGame = (USER) => {
    let COMPUTER_NUMBER = computerNumber();
    let USER_NUMBER;
    let USER_SELECT = "1";
    while (USER_SELECT !== "2") {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
            USER.number = String(number).split("");
            USER_NUMBER = USER.getNumber();
        });
        throwHandling(USER_NUMBER);
        if (numberCompare(COMPUTER_NUMBER, USER_NUMBER)) {
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (select) => {
                USER.select = select;
                USER_SELECT = USER.getSelect();
            });
            COMPUTER_NUMBER = computerNumber();
        };
    };
}
module.exports = selectGame;