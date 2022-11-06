class Exception {
    constructor(input) {
        this.input = input;
    }
    checkInputException() {
        this.isThreeLength(this.input);
        this.isDuplication(this.input);
        this.isHaveZero(this.input);
    }
    checkReplayInputException() {
        this.isOneOrTwo(this.input);
    }
    isThreeLength(input) {
        if (input.length !== 3) throw new Error('3자리 숫자를 입력해주세요.');
    }
    isDuplication(input) {
        const inputSet = [...new Set(input.split(''))];

        if (inputSet.length !== 3)
            throw new Error('서로 다른 수를 입력해주세요.');
    }
    isHaveZero(input) {
        for (let number of input) {
            if (number === '0')
                throw new Error('1 ~ 9 사이에 숫자를 입력해주세요.');
        }
    }
    isOneOrTwo(input) {
        if (input !== '1' && input !== '2')
            throw new Error('1 또는 2를 입력해주세요.');
    }
}

module.exports = Exception;
