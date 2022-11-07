class User {
  checkInputLength(userInput) {
    return userInput.length === 3;
  }
  checkInputExist(userInput) {
    const isExist = new Set([...userInput]).size !== 3;
    return isExist === false;
  }
  checkInputNum(userInput) {
    const setInputToNum = Number(userInput);
    const isNumber = (num) => !Number.isNaN(num) && typeof num === "number";

    return isNumber(setInputToNum);
  }
  checkInputZero(userInput) {
    const isZeroExist = [...userInput].includes("0");
    return isZeroExist === false;
  }
}
