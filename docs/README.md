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

-기능 목록-
play() - 게임의 시작

makeRandomNum() - 랜덤 숫자 생성 함수

reGame() - 게임의 반복을 컨트롤 하는 함수 
/예외처리: 1,2 이외의 숫자가 입력될 경우

startGame() - 게임을 진행하는 함수
/예외처리: 숫자를 입력하지 않을경우
/입력한 길이가 3을 초과한 경우

checkNum() - 사용자가 입력한 숫자를 판별하는 함수
반환 값: 1 세개 다 맞춤, 0 틀림
/예외처리: 중복된 숫자를 입력했을 경우
/숫자 0 입력

duplicateCheck() - 중복 숫자 체크 함수
반환 값: 1 중복값 있음

print() - 라운드 결과를 프린트하는 함수