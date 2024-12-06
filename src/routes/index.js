const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const adminRouter = require("./admin.route");
const roomRouter = require("./room.route");
const deviceRouter = require("./device.route");
const subscriberRouter = require("./subscriber.route");
const sensorRouter = require("./sensor.route");
const meterPowerRouter = require("./meterPower.route");
const statisticRouter = require("./statistic.route");
const speechRouter = require("./speech.route");
const axios = require('axios')
//Index of route middleware
const route = (app) => {
  // Route middleware auth
  app.use("/auth", authRouter);

  // Route user
  app.use("/api/v1/users", userRouter);

  // Route admin
  app.use("/api/v1/admins", adminRouter);

  // Route room
  app.use("/api/v1/rooms", roomRouter);

  // Route device
  app.use("/api/v1/devices", deviceRouter);

  // Route subscriber
  app.use("/api/v1/subscribers", subscriberRouter);

  // Route sensor
  app.use("/api/v1/sensors", sensorRouter);

  // Route meter_power
  app.use("/api/v1/meter-powers", meterPowerRouter);

  // Route meter_power
  app.use("/api/v1/statistic", statisticRouter);

  //Route Speech
  app.use("/speech",speechRouter)
  // Định nghĩa route để proxy request tới OpenWeatherMap
  app.get('/api/weather', async (req, res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=10.850639643531839&lon=106.77191108804513&appid=5e5d4dba5ae774fdf704f5879f5e9ba4`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Định nghĩa route để proxy request tới WAQI
  app.get('/api/aqi', async (req, res) => {
  const { city } = req.query;
  const token = 'ed4f76c28b8a0aba35abbfd1ab0769d3db6cb25f'; // Thay YOUR_WAQI_API_TOKEN bằng API token của bạn

  try {
    const response = await axios.get(`https://api.waqi.info/feed/@13756/`, {
      params: {
        token: token
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
};

module.exports = route;