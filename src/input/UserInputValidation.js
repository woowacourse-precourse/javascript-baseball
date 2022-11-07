class UserInputValid {
  constructor(userInputNumbers) {
    this.userInputNumbers = userInputNumbers.split("").map((i) => +i);
  }

  checkValid() {
    if (!this.checkInputType(this.userInputNumbers)) {
      return this.alertInvalidInput("NaN");
    }
    if (!this.checkValidLength(this.userInputNumbers)) {
      return this.alertInvalidInput("inValidLength");
    }
    if (!this.checkDuplicate(this.userInputNumbers)) {
      return this.alertInvalidInput("duplicate");
    }
    if (!this.userInputNumbers.every(this.checkValidScope)) {
      return this.alertInvalidInput("inValidScope");
    }
    return true;
  }

  alertInvalidInput(info) {
    if (info === "NaN") {
      throw "잘못 된 입력입니다! 숫자만 입력 가능합니다! 예)139";
    }
    if (info === "inValidLength") {
      throw "잘못 된 입력입니다! 숫자는 반드시 3개를 입력해야 합니다! 예)139";
    }
    if (info === "duplicate") {
      throw "잘못 된 입력입니다! 중복된 숫자는 입력할 수 없습니다! 예)139";
    }
    if (info === "inValidScope") {
      throw "잘못 된 입력입니다! 1 ~ 9 사이의 숫자만 입력할 수 있습니다! 예)139";
    }
    return false;
  }

  checkValidLength(userInputNumbers) {
    if (userInputNumbers.length === 3) {
      return true;
    }
    return false;
  }

  checkValidScope(number) {
    if (1 <= number && number <= 9) {
      return true;
    }
    return false;
  }

  checkDuplicate(userInputNumbers) {
    if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
      return true;
    }
    return false;
  }

  isNumber(text) {
    if (typeof text === "number") {
      return true;
    }
    return false;
  }

  checkInputType(userInputNumbers) {
    if (userInputNumbers.every(this.isNumber)) {
      return true;
    }
    return false;
  }
}

module.exports = UserInputValid;
