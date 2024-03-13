const carFleet = require('./carFleet.js');

describe('carFleet', () => {
  it('returns 3 for target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]', () => {
    expect(carFleet(12, [10,8,0,5,3], [2,4,1,1,3])).toBe(3);
  });
  it('returns 1 for target = 10, position = [3], speed = [3]', () => {
    expect(carFleet(10, [3], [3])).toBe(1);
  });
  it('returns 1 for target = 100, position = [0,2,4], speed = [4,2,1]', () => {
    expect(carFleet(100, [0,2,4], [4,2,1])).toBe(1);
  });
});