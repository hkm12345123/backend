const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const adminRouter = require("./admin.route");
const roomRouter = require("./room.route");
const deviceRouter = require("./device.route");
const subscriberRouter = require("./subscriber.route");
const sensorRouter = require("./sensor.route");
const meterPowerRouter = require("./meterPower.route");
const speechRouter = require("./speech.route");
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

  //Route Speech
  app.use("/speech",speechRouter)
};

module.exports = route;
