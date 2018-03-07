module.exports = {
    log4js: {
        appenders: [
            {
                type: 'console',
                category: "console"
            }, //控制台输出
            {
                type: "dateFile",
                filename: 'logs/log',
                pattern: "_yyyyMMdd.log",
                // absolute: false,
                alwaysIncludePattern: true,
                // maxLogSize: 20480,
                // backups: 3,
                category: 'logInfo'

            }//日期文件格式
        ],
        levels:{
            logInfo: 'info', //info及以上级别输出到日志文件
            console: 'debug' //debug及以上级别输出到控制台
        }
    }
}