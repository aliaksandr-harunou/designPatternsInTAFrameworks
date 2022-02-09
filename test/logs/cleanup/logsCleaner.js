const fsextra = require('fs-extra');
const path = require('path');
const moment = require('moment');
const logger = require('../../../test/config/logger.config');
moment.locale('ru');
let currentDateMinusTwoDays = moment().clone().subtract(2, 'days').format('L');
const logsLocation = path.resolve(`./test/logs/info_[${currentDateMinusTwoDays}].log`);
const testResultsLocation = path.resolve(`./allure-results`);
const testReportLocation = path.resolve(`./allure-report`);

fsextra.exists(logsLocation, function (exists) {
    if (exists) {
        logger.info(`Logs exist. Deleting file info_[${currentDateMinusTwoDays}].log`);
        fsextra.unlinkSync(logsLocation);
    } else {
        logger.info(`File 'info[${currentDateMinusTwoDays}].log' not found`);
    }
});

fsextra.exists(testResultsLocation, function (exists) {
    if (exists) {
        logger.info(`Deleting previous test results`);
        fsextra.rmdirSync(testResultsLocation, { recursive: true });
    } else {
        logger.info(`No test results found`);
    }
});

fsextra.exists(testReportLocation, function (exists) {
    if (exists) {
        logger.info(`Deleting previous test report`);
        fsextra.rmdirSync(testReportLocation, { recursive: true });
    } else {
        logger.info(`No test reports found`);
    }
});

