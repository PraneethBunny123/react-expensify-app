import sum from './sum';

const genrateGreeting = (name) => `Hi ${name}!`

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('generating greeting', () => {
  expect(genrateGreeting('bunny')).toBe(`Hi bunny!`)
})