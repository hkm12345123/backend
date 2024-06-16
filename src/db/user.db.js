const User = require('../app/models/user.model')

// Get all users
const getAllUserDb = async (query) => {
    const [totalUsers, users] = await Promise.all([
      User.find(query).count(),
      User.find(query)
    ])
  
    return {
      users,
      totalUsers
    }
}

// Get one user
const getUserDb = async (query) => {
    const user = await User.findOne(query)
  
    return user
}

// Create user
const createUserDb = async (query) => {
    const user = await new User(query).save()
  
    return user
}

// Update info 
const updateUserDb = async (query) => {
    const { userId, newInfo } = query
    const { name, email } = newInfo
  
    const user = await User.findById(userId)
    user.name = name
    user.email = email
  
    const rs = await user.save()
    return rs
}

// Update password 
const updateUserPwDb = async (query) => {
    const { userId, password } = query
    const user = await User.findById(userId)
    user.password = password
  
    const rs = await user.save()
    return rs
}

module.exports = {
    getAllUserDb,
    getUserDb,
    createUserDb,
    updateUserDb,
    updateUserPwDb
};
