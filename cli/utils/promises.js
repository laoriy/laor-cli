const { promisify } = require('util');
let figlet = require('figlet');
let ncp = require('ncp');
let download = require('download-git-repo');

ncp = promisify(ncp);
download = promisify(download);
figlet = promisify(figlet);

module.exports = {
    figlet,
    ncp, // 文件拷贝
    download, // 下载仓库模板
};
