const ora = require('ora');

module.exports = (fn, message) => {
    const loadingFn = async (...args) => {
        const spinner = ora(message);
        spinner.start();
        const result = await fn(...args);
        spinner.stop();
        if (result) {
            spinner.fail();
        }
        return result;
    };
    return loadingFn;
};
