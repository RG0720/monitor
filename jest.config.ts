export default {
  clearMocks: true,
  // collectCoverage: true,
  // moduleNameMapper: {
  //   '@/(.*)': '<rootDir>/src/$1',
  // },
  // roots: ['<rootDir>'],
  collectCoverageFrom: [
    'packages/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/vendor/**',
    '!**/*.config.{js,ts}',
    '!**/config.{js,ts}',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
