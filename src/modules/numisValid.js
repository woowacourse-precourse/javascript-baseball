function isValid(input) {
    if(input.length != 3) throw new Error()
    let num = input.split('').map((num) => {
        if(isNaN(num)) throw new Error()
    })
}