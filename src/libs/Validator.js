class Validator {
  checkInputValueValid(inputValue) {
    return (
      this.checkInputValueType(inputValue) &&
      this.checkInputValueLength(inputValue) &&
      this.checkInputValueRange(inputValue) &&
      this.checkInputValueDuplicated(inputValue)
    );
  }

  checkInputValueType(inputValue) {
    return (
      typeof inputValue === "string" && isNaN(Number(inputValue)) === false
    );
  }

  checkInputValueLength(inputValue) {
    return inputValue.length === 3;
  }

  checkInputValueRange(inputValue) {
    return inputValue.split("").includes("0") === false;
  }

  checkInputValueDuplicated(inputValue) {
    return inputValue.length === new Set([...inputValue]).size;
  }
}

module.exports = Validator;
