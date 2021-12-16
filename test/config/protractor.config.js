const yargs = require('yargs').argv;

exports.config = {
    restartBrowserBetweenTests: true,

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    // suites: {
    //     homepage: 'tests/e2e/homepage/**/*Spec.js',
    //     search: ['tests/e2e/contact_search/**/*Spec.js',
    //       'tests/e2e/venue_search/**/*Spec.js']
    // },

    multiCapabilities: [
    {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 2,
    }
    ],
    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
            overwrite: true,
            reportTitle: 'TEST EPAM HEROES PAGE',
            reportPageTitle: 'TEST EPAM HEROES PAGE',
            reportDir: 'test/report',
            autoOpen: false
        },
        timeout: 70000
    }
};