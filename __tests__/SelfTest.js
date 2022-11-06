test("상대방 결과에 중복값 있는지 테스트", () => {
  expect(() => {
    const app = new App();
    const computerNumber = app.isComputerNumbers();
      
    expect(new Set(computerNumber).size).toEqual(3);
  })
})