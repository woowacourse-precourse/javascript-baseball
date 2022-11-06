class Exception {
    constructor(input) {
        this.input = input;
    }
    checkException() {
        this.isThreeLength(this.input);
    }
    isThreeLength(input) {
        if (input.length !== 3) throw new Error('3자리 숫자를 입력해주세요.');
    }
}

module.exports = Exception;
