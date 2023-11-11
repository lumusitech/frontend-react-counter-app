

describe('test on <DemoComponent />', () => {
  test('should pass', () => {
    // Arrange
    const message1 = "hello world"

    // Act
    const message2 = message1.trim()

    // Assert
    expect(message1).toBe(message2)
  })
})