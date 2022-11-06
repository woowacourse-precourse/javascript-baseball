class isError {
    constructor(USER_INPUT) {
        USER_INPUT = this.USER_INPUT;
    }

    // 입력받은 숫자 쪼개기
    sliceNumber(NUM) {
        let RESULT = (NUM + '').split('').map(function(item) {
            return parseInt(item);
          });

        return RESULT;
    }

    // 예외처리 진행
    isInputCorrect() {
        let TEST = this.sliceNumber(this.USER_INPUT);
        if (this.isInputLengthCorrect(TEST) | this.isNumberRangeCorrect(TEST)) {
          return true;
        }
        return false;
      }

    // 입력받은 숫자가 3자리이며 0이 아닌가
    isInputLengthCorrect(NUM_LIST) {
        if (NUM_LIST.length != 3){
          return true;
        }
        return false;
      }
    
    // 입력받은 값이 0이 아닌가
    isNumberRangeCorrect(NUM_LIST) {
        for (let i=0; i<3; i++) {
            if (NUM_LIST[i] == 0){
                return true;
            }
        }
        return false;
      }
}

module.exports = isError;