class ValidationCheck {
    static consistsOfPositiveNumber(str) {
        const NUMBER_REGEXP = /^[1-9]+$/;
        if (!NUMBER_REGEXP.test(str)) {
          return false;
        }
        return true;
    }

    static isThreeDigit(str) {
        if (!ValidationCheck.consistsOfPositiveNumber(str) || str.length !== 3) {
          return false;
        } 
        return true;
    }

    static isAllDifferent(str) {
        const setToCompare = new Set(str);
        if (str.length !== setToCompare.size) {
          return false;
        }
        return true;
    }

    static isCorrectInput(str) {
        if (ValidationCheck.isThreeDigit(str) && ValidationCheck.isAllDifferent(str)) {
          return true;
        }
        return false;
    }

    static isZeroScore(score) {
        if ((score.ball === 0) && (score.strike === 0)) {
          return true;
        }
        return false;
    }

    static isThreeStrike(score) {
        if (score.strike === 3) return true;
        return false;
    }

    static isOneOrTwo(str){
        const ONE_TWO_REGEXP = /^[1,2]$/;
        
        if (ONE_TWO_REGEXP.test(str)) return true;

        return false;
    }
}

module.exports = ValidationCheck;