module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-junit-reporter')
        ],
        client: {
            clearContext: false
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage'),
            reports: ['lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        junitReporter: {
            outputFile: 'test.xml',
            useBrowserName: false,
            xmlVersion: 1
        },
        reporters: ['progress', 'coverage-istanbul', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true
    });
};
