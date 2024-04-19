const climbStairs = require('./climbingStairs');

describe('climbStairs', () => {
  test('climbs 1 step', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('climbs 2 steps', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('climbs 3 steps', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('climbs 4 steps', () => {
    expect(climbStairs(4)).toBe(5);
  });

  test('climbs 5 steps', () => {
    expect(climbStairs(5)).toBe(8);
  });

  test('climbs 10 steps', () => {
    expect(climbStairs(10)).toBe(89);
  });

  test('climbs 20 steps', () => {
    expect(climbStairs(20)).toBe(10946);
  });

  test('climbs 45 steps (max constraint)', () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
