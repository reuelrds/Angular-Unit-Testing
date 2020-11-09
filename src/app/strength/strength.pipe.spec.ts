import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {

  it('should display weak if strength is 5', () => {

    // Arrange
    const pipe = new StrengthPipe();

    // Act & Assert
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {

    // Arrange
    const pipe = new StrengthPipe();

    // Act & Assert
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});
