const mqtt = require("mqtt");
const topic1 = "sensor_data/tandat/node1";
// const smart_home_cd = "smart_home_control_device";
// Add your new topic here
const topic2 = "sensor_data/tandat/node2";  // Replace with your desired topic

const { insertDataSensorDb, insertDataMq135Db } = require("../db/sensor.db");

const host_mqtt = "broker.hivemq.com ";
const port_mqtt = "1883";
const clientId = `43e9e996-5823-4b43-bf06-aace43c3da0a`;
const connectUrl = `mqtt://${host_mqtt}:${port_mqtt}`;

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
  
  // Subscribe to multiple topics
  mqttClient.subscribe([topic1, topic2]);

  mqttClient.on("message", async (topic, msg) => {
    const message = JSON.parse(msg.toString());
    
    // Handle messages based on their topics
    if (topic === topic1) {
      console.log("Message from topic1:", message);
      const {humidityAir, temperature, pm25, location} = message;
      await insertDataSensorDb({ humidityAir, temperature, pm25, location});
    }
    
    if (topic === topic2) {
      console.log("Message from topic2:", message);
      const {mq135,location} = message;
      await insertDataMq135Db({mq135,location});
    }
  });
});

mqttClient.on("error", function (error) {
  console.log("Unable to connect: " + error);
  // process.exit(1);
});

module.exports = mqttClient;