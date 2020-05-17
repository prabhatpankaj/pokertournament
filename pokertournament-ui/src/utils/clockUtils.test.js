const formatSeconds = require('./clockUtils');

test('formats 42 as 0:42', () => {
    expect(formatSeconds(42)).toBe('0:42')
});

test('formats 102 as 1:42', () => {
    expect(formatSeconds(102)).toBe('1:42')
});

test('formats 642 as 10:42', () => {
    expect(formatSeconds(642)).toBe('10:42')
});

test('formats 3642 as 1:00:42', () => {
    expect(formatSeconds(3642)).toBe('1:00:42')
});

test('formats 36042 as 1:00:42', () => {
    expect(formatSeconds(36042)).toBe('10:00:42')
});

test('formats 86442 as 1:00:00:42', () => {
    expect(formatSeconds(86442)).toBe('1:00:00:42')
});
