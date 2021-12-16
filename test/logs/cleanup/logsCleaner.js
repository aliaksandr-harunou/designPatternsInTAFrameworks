const fsextra = require('fs-extra');
const path = require('path');
const moment = require('moment');
const logger = require('../../../test/config/logger.config');
moment.locale('ru');
let currentDateMinusTwoDays = moment().clone().subtract(2, 'days').format('L');
const logsLocation = path.resolve(`./test/logs/info_[${currentDateMinusTwoDays}].log`);

fsextra.exists(logsLocation, function (exists) {
    if (exists) {
        logger.info(`Logs exist. Deleting file info_[${currentDateMinusTwoDays}].log`);
        fsextra.unlinkSync(logsLocation);
    } else {
        logger.info(`File 'info[${currentDateMinusTwoDays}].log' not found`);
    }
});