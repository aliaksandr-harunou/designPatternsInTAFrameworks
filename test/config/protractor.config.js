const yargs = require('yargs').argv;

exports.config = {
    restartBrowserBetweenTests: true,

    directConnect: true,

    framework: 'mocha',

    suites: {
        appreciationsBadges: '../specs/appreciationsBadges/*.js',
        recentBadges: '../specs/recentBadges/*.js',
        full:'../specs/*/*.js'
    },

    multiCapabilities: [
    {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 2,
    }
    ],
    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 70000
    }
};