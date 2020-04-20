module.exports = {
  preset: 'jest-playwright-preset',
  reporters: ['default', 'jest-screenshot/reporter'],
  transform: { '^.+\\.ts$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
