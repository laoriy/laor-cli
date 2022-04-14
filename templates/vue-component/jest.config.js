/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue2-jest',
        '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,vue}', '!**/src/types/**', '!**/node_modules/**'],
    coverageReporters: ['html', 'text-summary'],
    transformIgnorePatterns: ['/node_modules/'],
    testURL: 'http://localhost/',
};
