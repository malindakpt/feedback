module.exports = {
    testEnvironment: 'jsdom', // or 'node' for Node.js testing
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Adjust according to your aliases
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // For custom setup
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  };
  