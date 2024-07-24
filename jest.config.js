export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/',
  ],
};
