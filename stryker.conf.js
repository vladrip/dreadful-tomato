module.exports = function (config) {
    config.set({
        mutate: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/test.ts', '!src/environments/*.ts'],
        mutator: 'typescript',
        testRunner: 'karma',
        karma: {
            configFile: 'karma.conf.js',
            projectType: 'angular-cli',
            config: {
                browsers: ['ChromeHeadless'],
            },
        },
        reporters: ['clear-text', 'progress'],
        coverageAnalysis: 'off',
        maxConcurrentTestRunners: 2
    });
};
