class Exception {
  checkError(userInput) {
    if (String(userInput).length !== 3) {
      return true;
    }
    if (isNaN(userInput) === false && typeof userInput === 'number') {
      return true;
    }
    if (new Set([...userInput]).size < 3) {
      return true;
    }
    if (String(userInput).includes('0')) {
      return true;
    }

    return false;
  }
}

module.exports = Exception;