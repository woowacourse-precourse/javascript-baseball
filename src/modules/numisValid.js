function isValid(input) {
    if(new Set(input).size !== 3) return false;
    const checkNumber = input.every(v => !isNaN(v) ? true : false)
    return checkNumber ? input : false;
}

exports.isValid = isValid