# 기능목록

- [x] Console.readLine를 사용하여 사용자에게 값을 입력받는 기능 구현 => getUserNumberFromReadLine
- [x] 시작시 숫자 야구 게임을 시작합니다. 문구 출력
- [x] 컴퓨터가 1~9까지의 수 중에서 임의의 3가지를 랜덤으로 얻는 기능 구현 => getRandomNumberFromComputer
- [x] 사용자와 컴퓨터를 비교해 스트라이크,볼,낫싱,정답을 출력
- [x] 스트라이크 개수를 측정하는 기능 구현 (같은수 && 같은자리) => countStrike
- [x] 볼의 개수를 측정하는 기능 구현(같은 수 && 다른자리) => countBall
- [x] 낫싱 기능 구현(같은수가 전혀없다) // 스트라이크, 볼이 0개일 경우
- [x] 게임이 끝난 경우 재시작/종료를 하도록 기능 구현 => confirmExitOrReStart

<br>

# 예외 사황

- [x] 1부터 9까지의 숫자가 아닌경우 throw문을 사용해 예외를 발생 => isValidSingleDigitNaturalNumber
- [x] 서로 다른 3개의 숫자가 아닌경우 throw문을 사용해 예외를 발생 => isValidNumberWithoutDuplicate
- [x] 새로 시작은 1, 종료는 2 나머지는 throw문을 이용해 예외처리
