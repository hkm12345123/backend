const { nanoid } = require('nanoid');
const uuidv4 = require('uuid').v4();

const genId = async (n) => {
    return await nanoid(n);
};

module.exports = { genId };
