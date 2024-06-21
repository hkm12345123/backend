const mqtt = require("mqtt");
const smart_home_hat = "smart_home_humidity_and_temperature";
const smart_home_cd = "smart_home_control_device";
const { insertDataSensorDb } = require("../db/sensor.db");

const host_mqtt = "broker.hivemq.com";
const port_mqtt = "1883";
const clientId = `43e9e996-5823-4b43-bf06-aace43c3da0a`;
const connectUrl = `mqtt://${host_mqtt}:${port_mqtt}`;

// thực hiện tạo connect tới mqtt broker
var mqttClient = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  //username: "smart_home_2",
  //password: "123456",
  reconnectPeriod: 1000,
});

mqttClient.once("connect", function () {
  console.log("Connect to mqtt successfully");
  mqttClient.subscribe(smart_home_hat);

  mqttClient.on("message", async (topic, msg) => {
    const message = JSON.parse(msg.toString());
    const {humidityAir, temperature, CO, pm25, so2, aqi_so2, aqi_CO,aqi_pm25,} = message;

    await insertDataSensorDb({ humidityAir, temperature, CO, pm25, so2, aqi_so2, aqi_CO,aqi_pm25 });
  });
});

mqttClient.on("error", function (error) {
  console.log("Unable to connect: " + error);
  // process.exit(1);
});

module.exports = mqttClient;
