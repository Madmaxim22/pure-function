import { healthStatus } from '../character';

test.each([
  [
    {
      name: 'Маг',
      health: 90,
    },
    'healthy',
  ],
  [
    {
      name: 'Маг',
      health: 50,
    },
    'wounded',
  ],
  [
    {
      name: 'Маг',
      health: 15,
    },
    'wounded',
  ],
  [
    {
      name: 'Маг',
      health: 14,
    },
    'critical',
  ],
  [
    {
      name: 'Маг',
      health: 0,
    },
    'critical',
  ],
])('Health status check', (character, characterStatus) => {
  const result = healthStatus(character);

  expect(result).toBe(characterStatus);
});
