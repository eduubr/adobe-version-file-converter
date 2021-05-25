const path = require('path');

export const getFileExtension = (filename) => filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2)

export const getFileName = (file) => path.parse(file).base
