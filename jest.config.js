module.exports = {
    coverageDirectory: '<rootDir>/coverage/',
    roots: ['<rootDir>/src/', '<rootDir>/test/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    testRegex: '/test/.*\\.test.(ts|tsx)$',
    moduleDirectories: ['node_modules'],
    setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
    collectCoverageFrom: ['src/**/*.*?'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
}
