module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.dist/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@app(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@core(.*)$': '<rootDir>/src/core$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },
};
