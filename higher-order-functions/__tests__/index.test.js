// higherOrderFunctions.test.js

const { logMessage, getGreetingFunction } = require('../practice');

describe('logMessage', () => {
  let mockConsoleLog;

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
  });

  test('should log the correct message from server', () => {
    const mockServerLog = jest.fn(message => `[Server]: ${message}`);
    logMessage('Hello', mockServerLog);
    expect(mockConsoleLog).toHaveBeenCalledWith('[Server]: Hello');
  });

  test('should log the correct message from client', () => {
    const mockClientLog = jest.fn(message => `[Client]: ${message}`);
    logMessage('World', mockClientLog);
    expect(mockConsoleLog).toHaveBeenCalledWith('[Client]: World');
  });

  test('should not call console.log if no callback is provided', () => {
    logMessage('Test');
    expect(mockConsoleLog).not.toHaveBeenCalled();
  });
});

describe('getGreetingFunction', () => {
  test('should return English greeting when "en" is provided', () => {
    const greetInEnglish = getGreetingFunction('en');
    expect(greetInEnglish('John')).toBe('Hello, John!');
  });

  test('should return Spanish greeting when "es" is provided', () => {
    const greetInSpanish = getGreetingFunction('es');
    expect(greetInSpanish('Juan')).toBe('Hola, Juan!');
  });

  test('should return a default English greeting when no language or an unrecognized language is provided', () => {
    const defaultGreeting = getGreetingFunction();
    expect(defaultGreeting('Sam')).toBe('Hello, Sam!');
  });
});
