function isValid(input) {
    if(input.length != 3) throw new Error();
    let number = input.map((num) => {
        if(isNaN(num)) throw new Error();
        return num;
    })
    if(new Set(number).size != 3) throw new Error();
    return number;
}

exports.isValid = isValid