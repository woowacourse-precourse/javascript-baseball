# App

## static isValidMenuInput(input: string): boolean

- check if user input is 1 or 2

## static pickThreeDigits(): number[]

- pick 3 random digits
- 3 digits should be unique

## static isValidPlayInput(input: string): boolean

- check if user input is valid
- length of input should be 3
- each character of input should be digit (1~9)
- 3 digits should be unique

## static getGuessArray(input: string): number[]

- turn input string into number array

## static judge(guess: number[], answer: number[]): number[]

- return array of length 2 which contains judge result
  - [0]: ball count
  - [1]: strike count

## static getMessage(judged: number[]): string

- return message string based on judge result

## play(): void
- turn function
  - callback function passed to MissionUtils.Console.readline
  - calls itself recursively if user input is not correct answer
  - calls menuSelect function if user input is  correct answer
- menuSelect function
  - callback function passed to MissionUtils.Console.readline
  - calls turn function if user want restart game
  - return if user want to exit game
