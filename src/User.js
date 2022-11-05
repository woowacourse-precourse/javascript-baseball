class User{
    constructor() {
        this.number = [];
    }

    setUserNumber(number){
        this.number = number.split('');
    }
}

module.exports = User;