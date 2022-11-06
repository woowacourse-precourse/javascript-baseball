
const isValidBallNumber = (answer) => {

    if (answer.length !== 3) {
        return false
    }

    if (answer[0] === answer[1]) {
        return false
    }

    if (answer[1] === answer[2]) {
        return false
    }

    if (answer[2] === answer[0]) {
        return false
    }

    if (isNaN(Number(answer))) {
        return false
    }

    return true
}

module.exports = { isValidBallNumber };