const browserslist = require('browserslist');
const config = require('../src');

it('exports a valid configuration', () => {
  expect(() => {
    browserslist(config);
  }).not.toThrow();

  expect(Array.isArray(browserslist(config))).toBe(true);
});
