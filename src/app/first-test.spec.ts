describe('My First Test', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('Should be true if true', () => {
    // Arrange
    sut.a = false;

    // Act
    sut.a = true;

    // Assert
    expect(sut.a).toBe(true);
  });
});
