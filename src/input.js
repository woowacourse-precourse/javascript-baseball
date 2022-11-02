const { Console } = require('@woowacourse/mission-utils');

function inputUserNumber() {
    Console.readLine('숫자를 입력하세요.\n', (userNumber) => {
        console.log(userNumber);
        Console.close();
    })
}
