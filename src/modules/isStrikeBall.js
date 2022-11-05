function isStrikeBall(computerInput, userInput) {
    let strikeCount = 0
    let ballCount = 0

    computerInput.forEach((ele, idx) => {
        if(ele === userInput[idx]) strikeCount++
        else if(userInput.includes(ele)) ballCount++
    })
    return { strikeCount, ballCount } 
}

// function strike(computerInput, userInput) {
//     let strikeCount = 0

//     computerInput.map((ele, idx) => {
//         if(ele === userInput[idx]) strikeCount++;
//     })
//     return strikeCount;
// }

// function ball(computerInput, userInput) {
//     let ballCount = 0
//     computerInput.map((ele, idx) => {
//         if(idx == 0 && ele === userInput[1] || ele === userInput[2]) ballCount++
//         if(idx == 1 && ele === userInput[0] || ele === userInput[2]) ballCount++
//         if(idx == 2 && ele === userInput[0] || ele === userInput[1]) ballCount++
//     })
//     return ballCount;
// }

exports.isStrikeBall = isStrikeBall