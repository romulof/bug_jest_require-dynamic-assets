const path = require('path');

module.exports = {
    process(src, filePath) {
        const fileName = path.basename(filePath);

        if (fileName.startsWith('fail.')) {
            return 'throw new Error("file not found")';
        }

        return `module.exports = ${JSON.stringify(fileName)};`;
    },
};
