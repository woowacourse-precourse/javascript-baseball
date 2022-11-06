- 같은 수 같은자리 : 스트라이크
- 같은 수 다른자리 : 볼
- 같은 수 전혀없음 : 낫싱

- 재시작: 1 종료: 2

요구사항:
- indent(인덴트, 들여쓰기) depth를 2까지만 허용한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Random 값 추출은 MissionUtils 라이브러리의 Random.pickNumberInRange()를 활용한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.
- 상수명은 SNAKE_CASE로 작성
ex) const FIREFOX = 1;
const IS_LEFT = true;

필요한 것:
play() - 게임의 시작, 종료를 판단하는 함수
startGame() - 게임을 진행하는 함수
pickRandomNum() - 임의의 다른 수 3개 선택 하는 함수
반환 값 세자리정수 
readUserNum() - 사용자 입력 받는 함수, 잘못된 값 입력 시 예외 처리 후 종료
반환 값: 1 정상적인 진행, 0 예외로 인한 종료
checkNum() - 사용자가 입력한 숫자를 판별하는 함수
printResult() - 판별 한 것을 기반으로 출력하는 함수