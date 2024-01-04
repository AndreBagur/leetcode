const evalRPN = require('./evaluateReversePolishNotation.js');

describe('evalRPN', () => {
  it('should return 9 for ["2","1","+","3","*"]', () => {
    expect(evalRPN(["2","1","+","3","*"])).toBe(9);
  });
  it('should return 6 for ["4","13","5","/","+"]', () => {
    expect(evalRPN(["4","13","5","/","+"])).toBe(6);
  });
  it('should return 22 for ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
  });
});