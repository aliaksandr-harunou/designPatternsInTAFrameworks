const winston = require('winston');
const moment = require('moment');
moment.locale('ru');
let currentDate = moment().format('L');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({ filename: `test/logs/info_[${currentDate}].log`, level: 'info'})
    ],
    exitOnError: false,
    format: winston.format.simple()
});

module.exports = logger;

