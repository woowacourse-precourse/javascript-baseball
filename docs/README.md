# ⚾️ <span style="color:#2bc1bc">WLB(Woowahan League BaseBall)</span>

## 📍 **미션 내용**
- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임

<br>
<hr>

## 📍 **입력 요구 사항**

  - 서로 다른 3자리의 수
  - 게임이 끝난 경우 재시작/종료를 구분하는 1과 2 중 하나의 수

<br>
<hr>


## 📍 **출력 사항 상세**

|상황|출력 문구|비고
|:---:|:---:|:---:|
게임 시작 | 숫자 야구 게임을 시작합니다.|-
모든 수와 자리가 같은 경우 | 3개의 숫자를 모두 맞히셨습니다! 게임 종료|-
게임이 끝난 후 출력 메세지 | 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.|-
|
<span style="color:#2bc1bc">같은 수가 같은 자리에 있는 경우</span>|<span style="color:#2bc1bc">N 스트라이크</span>|-
<span style="color:#2bc1bc">같은 수가 다른 자리에 있는 경우</span>|<span style="color:#2bc1bc">N 볼</span>|-
<span style="color:#2bc1bc">같은 수가 전혀 없는 경우</span>|<span style="color:#2bc1bc">낫싱</span>|-
|
값을 입력할 때의 기본 형식 | 숫자를 입력해주세요 : NUM |-
|

##### *N : 해당 반환값의 개수
##### *NUM : 3자리의 정수

<br>


<hr>

## 📍 **필요 기능**

- #### 1. 각 자리수가 다른 세 자리 수 만드는 기능 <span style="color:gray">(MissionUtils - Random 활용)</span>
- #### 2. 값을 입력하는 기능 <span style="color:gray">(MissionUtils - Console 활용)</span>
- #### 3. 입력된 수와 컴퓨터가 만든 수를 비교하여 결과 값을 반환하는 기능
  - #### 스트라이크 개수를 반환하는 기능
  - #### 볼 개수를 반환하는 기능
- #### 4. 비교한 결과값에 따라 내용을 반환하는 기능
- #### 5. 잘못된 값을 입력할 경우 예외처리 후 어플리케이션을 종료하는 기능 <span style="color:gray">(throw)</span>
- #### 6. 입력된 숫자를 확인하여 게임을 재시작 혹은 종료를 하는 함수


<br>
<hr>

## 📍 **추가 요구 사항**
- #### 1. indent의 depth는 2 이하
- #### 2. 함수는 한 가지의 일만 하도록
- #### 3. Jest를 통해 기능 테스트

<br>
<hr>

## 📍 **깃여운 커밋 컨벤션**

    ➕ feat - 새로운 기능 추가
    🔧 fix - 버그 픽스 사항
    🗒️ docs - 문서 내용 추가, 수정 사항
    🖍️ style - 포멧, 세미콜론 등 코드 스타일 수정 사항
    🛠 refactor - 코드 리팩토링 사항
    🔍 test - 테스트 사항
    🎸 chore - 기타 사항

    ex1) ➕ feat plusMyNumber - add new feature plus my number
    ex2) ➕ docs - edit docs

