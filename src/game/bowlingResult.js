// 볼 체크
const ballCheck = (user, random) => {
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (random[i] !== user[i] && random.includes(user[i])) ball++;
    }

    return ball;
}

// 스트라이크 체크
const strikeCheck = (user, random) => {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (user[i] === random[i]) strike++;
    }

    return strike;
}

// 볼, 스트라이크 출력
const compareNumber = (strike, ball) => {
    if (strike === 0 && ball === 0) return '낫싱';
    if (strike === 0 && ball > 0) return `${ball}볼`;
    if (strike > 0 && ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
}

module.exports = {
    ballCheck,
    strikeCheck,
    compareNumber
}