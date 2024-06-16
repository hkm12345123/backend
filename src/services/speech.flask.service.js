const commandHandle = require('../helpers/command.handle')
const axios = require("axios")
const speechHandler = async (message) => {
    try {
        flaskApiUrl = "http://127.0.0.1:5000"
        // Gọi API từ Flask
        const response = await axios.post(flaskApiUrl,{command : message});
        return commandHandle(response.data)
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Error calling Flask API:', error.message);
      }
}


module.exports = speechHandler;