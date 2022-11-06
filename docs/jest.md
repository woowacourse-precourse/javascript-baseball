# jest로 테스트 코드 작성하기

jest는 페북에서 만든 테스팅 라이브러리 입니다.

ALL-in-one 테스팅 라이브러리

테스팅 프레임워크

첫 테스트 코드 작성

```
test("테스트 설명", () => {
    expect("검증 대상").toXxx("기대 결과");
})
```

toXxx 부분에서 사용되는 함수를 흔히 Test Matcher라고 합니다.
toBe() 함수는 숫자나 문자와 같은 객체가 아닌 기본형(원시타입) 값을 비교할 때 사용됩니다.

그리고 npm test를 실행하면 프로젝트 내에 모든 테스트 파일을 찾아서 테스트를 실행해줍니다. Jest는 기본적으로 test.js로 끝나거나, **test** 디렉터리 안에 있는 파일들은 모두 테스트 파일로 인식합니다. 만약 특정 테스트 파일만 실행하고 싶은 경우에는 npm test <파일 명이나 경로>를 입력하면 됩니다.

## 자주 사용되는 Matcher

Jest에서는 거의 상상 가능한 모든 경우에 대한 Matcher 함수를 제공하고 있습니다.
실전에서 많이 사용되는 Matcher 정리

toEqual()
다음과 같이 아이디를 넘기면 가짜 유저 객체를 리턴하는 함수를 테스트 하려고 합니다.

```
function getUser(id) {
    return {
        id,
        email: `user${id}@test.com`,
    };
}
```

toBe() 함수를 사용하면 테스트는 실패합니다.

```
test("유저 객체 리턴", () => {
    expect(getUser(1)).toBe({
        id: 1,
        email: `user1@test.com`,
    })
});
```
