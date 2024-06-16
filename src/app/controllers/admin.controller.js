const { getAllDeviceDb } = require('../../db/device.db')
const { getAllUserDb } = require('../../db/user.db')
const apiResponse = require('../../utils/apiResponse')
const APIStatus = require('../../constants/APIStatus')
const hashPassword = require('../../utils/hashPassword')
const asyncWrap = require('../../utils/asyncWrap')

const getStatistic = async (req, res, next) => {
  const [devices, users] = await Promise.all([getAllDeviceDb(), getAllUserDb({ role: 'user' })])

  return res.status(200).json(apiResponse({ status: APIStatus.SUCCESS, data: { devices, users } }))
};

const createAdmin = async (req, res, next) => {
    const { username, email, password, fullName } = req.body;
    const hashedPassword = await hashPassword(password);
    await new User({ username, email, password: hashedPassword, fullName, role: 'admin' }).save();
    return res.status(200).json({ msg: 'create admin successfully' });
};

module.exports = {
  getStatistic,
  createAdmin,
}
