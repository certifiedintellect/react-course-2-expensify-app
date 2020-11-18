const add = (a, b) => a + b

const greetingMessage = (name = 'Anonymous') => `Hello ${name}!`

const testAdd2Numbers = () => {
    const result = add(3, 4)
    expect(result).toBe(7)
}

test('should add 2 numbers', testAdd2Numbers)

const testGreetingMessage = () => {
    const result = greetingMessage('nikhil')
    expect(result).toBe('Hello nikhil!')
}

test('should test greeting message with passing name', testGreetingMessage)

const testGreetingMessageWithNoName = () => {
    const result = greetingMessage()
    expect(result).toBe('Hello Anonymous!')
}

test('should test greeting message with default name', testGreetingMessageWithNoName)