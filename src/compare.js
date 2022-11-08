/**
 * input의 특정 자리수를 answer과 비교하여 결과를 갱신하는 함수
 * @param {*} input - 사용자의 입력 문자열
 * @param {*} digit - 입력 문자열 중 탐색하는 인덱스
 * @param {*} answer - 정답 숫자
 * @param {*} result - 현재 입력에 대한 현재 결과
 */
function updateStrikeOrBall(input, digit, answer, result) {
    const CURRENT_INPUT_DIGIT = parseInt(input.charAt(digit));
    // strike
    if (CURRENT_INPUT_DIGIT === answer[digit]) {
        result["strike"]++;
        return;
    }

    // ball
    if (answer.includes(CURRENT_INPUT_DIGIT)) {
        result["ball"]++;
    }
}

module.exports = {
    updateStrikeOrBall
}