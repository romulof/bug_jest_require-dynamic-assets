module.exports = {
    moduleNameMapper: {
        '^@/(.+)$': '<rootDir>/src/$1',
    },
    transform: {
        // process js with `babel-jest`
        '^.+\\.js$': 'babel-jest',
        // process `*.vue` files with `vue-jest`
        '^.+\\.vue$': 'vue-jest',
        // assets modules must be mapped to a mock that exports their url
        '^.+\\.(svg|png|gif|jpe?g)$': '<rootDir>/fileTransformer.js',
    },
};
