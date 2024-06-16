const classifier = require('../utils/classifier');
const commandHandle = require('../helpers/command.handle')
const speechHandler = (message) => {
    const predict = classifier.classify(message);
    return commandHandle(predict);
}

module.exports = speechHandler;