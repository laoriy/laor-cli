import { sum } from '../src/index';

test('sum(2 + 2) 等于 4', () => {
    expect(sum(2, 2)).toBe(4);
});
