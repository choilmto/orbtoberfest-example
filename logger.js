const logger = require("pino")();

logger.info({
    duration: process.env.JOB_DURATION,
    version: process.env.VERSION,
    pull_requests: process.env.PULL_REQUESTS
});