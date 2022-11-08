# App

## static isValidMenuInput(input: string): boolean

- check if user input is 1 or 2

## static pickThreeDigits(input: string): number[]

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

## static play(): void

- menu select loop
  - prompt query message and get input from user
    - throw error if input is invalid
  - start game play loop or exit
- game play loop
  - prompt message
  - get input from user
    - throw error if input is invalid
  - judge user input
  - print result
- catch exception
