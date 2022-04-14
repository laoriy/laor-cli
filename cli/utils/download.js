const { existsSync, remove } = require('fs-extra');
const loadingFn = require('./loadingFn');
const { download } = require('./promises');

module.exports = async (repo, message) => {
    const os = require('os');
    const path = require('path');

    const presetName = repo
        .replace(/((?:.git)?#.*)/, '')
        .split('/')
        .slice(-1)[0]
        .replace(/[:#]/g, '');

    const tmpdir = path.join(os.tmpdir(), 'laoriy-cli-presets', presetName);
    // 如果该目录存在就删掉重新下载;
    if (existsSync(tmpdir)) {
        await remove(tmpdir);
    }
    await loadingFn(download, message)(repo, tmpdir, {
        clone: true,
    });
    return tmpdir;
};
