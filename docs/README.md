# 기능 구현 목록

## 1. 사용자의 입력 값 검사하기

사용자 입력 값은 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 고른 것이다.

- 문자열이 1부터 9까지의 수로 구성돼야 한다.
- 문자열의 길이가 3이어야 한다.
- 수에 중복이 없어야 한다.

## 2. 컴퓨터의 랜덤 값 생성하기

상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.

- MissionUtils 라이브러리에서 제공하는 Random 및 Console API를 사용하여 구현해야 한다.
- Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.
