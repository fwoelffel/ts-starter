import { sayHello } from './index';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('sayHello', () => {
  test(`should output 'Hello world!' to the console`, () => {
    jest.spyOn(console, 'log').mockImplementation();
    sayHello();
    expect(console.log).toBeCalledWith('Hello world');
  });
});