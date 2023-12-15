export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx|scss|css)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!axios|react-toastify)'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jsdom'
}
