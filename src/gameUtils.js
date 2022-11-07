const findStrikeBall = (target, input) => {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < target.length; i += 1) {
        if (target[i] === input[i]) strike += 1;
        else if (target.includes(input[i])) ball += 1;
    }
    console.log(strike, ball);
    return { strike, ball };
};

findStrikeBall('123', '456');

module.exports = findStrikeBall;