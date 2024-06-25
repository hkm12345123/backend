const mqtt = require("mqtt");
const sendEmail = require("../utils/sendEmail")
const smart_home_hat = "smart_home_humidity_and_temperature";
const smart_home_cd = "smart_home_control_device";
const { insertDataSensorDb } = require("../db/sensor.db");

const host_mqtt = "mqttvht.innoway.vn";
const port_mqtt = "8916";
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
    const {humidityAir, temperature, CO, pm25, so2, no2, aqi_so2, aqi_CO,aqi_pm25, aqi_no2, location} = message;

    await insertDataSensorDb({ humidityAir, temperature, CO, pm25, so2, no2, aqi_so2, aqi_CO, aqi_pm25, aqi_no2, location});
    if (aqi_pm25 > 100){
      const now = new Date().toLocaleString()
      const htmlContent = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f4f4f4;
                                    margin: 0;
                                    padding: 20px;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    background-color: #ffffff;
                                    padding: 20px;
                                    border-radius: 10px;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                }
                                .header {
                                    background-color: #ff4c4c;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                }
                                .content {
                                    padding: 20px;
                                }
                                .content h2 {
                                    color: #333333;
                                }
                                .content p {
                                    color: #555555;
                                    line-height: 1.6;
                                }
                                .content table {
                                    width: 100%;
                                    border-collapse: collapse;
                                    margin-top: 20px;
                                }
                                .content table, .content th, .content td {
                                    border: 1px solid #dddddd;
                                }
                                .content th, .content td {
                                    padding: 10px;
                                    text-align: left;
                                }
                                .footer {
                                    text-align: center;
                                    padding: 10px;
                                    color: #777777;
                                    font-size: 12px;
                                }
                            </style>
                            <title>Cảnh Báo Ô Nhiễm</title>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <h1>Cảnh Báo Ô Nhiễm</h1>
                                </div>
                                <div class="content">
                                    <h2>Kính gửi Quý Khách Hàng,</h2>
                                    <p>Chúng tôi muốn thông báo cho bạn về tình trạng ô nhiễm không khí tại khu vực <b>${location}</b>. Dưới đây là các chỉ số trung bình:</p>
                                    <table>
                                        <tr>
                                            <th>Thời gian</th>
                                            <th>Nhiệt Độ Trung Bình</th>
                                            <th>Độ Ẩm Không Khí Trung Bình</th>
                                            <th>Nồng Độ CO Trung Bình</th>
                                            <th>Nồng Độ SO2 Trung Bình</th>
                                            <th>Nồng Độ PM2.5 Trung Bình</th>
                                        </tr>
                                        <tr>
                                            <td>${now}</td>
                                            <td>${temperature} °C</td>
                                            <td>${humidityAir} %</td>
                                            <td>${CO} µg/m³</td>
                                            <td>${so2} µg/m³</td>
                                            <td><b>${pm25} µg/m³</b></td>
                                        </tr>
                                        <!-- Thêm các hàng dữ liệu khác tại đây -->
                                    </table>
                                    <p>Chúng tôi khuyến nghị bạn nên thực hiện các biện pháp bảo vệ sức khỏe khi ra ngoài, đặc biệt là đối với người già và trẻ nhỏ.</p>
                                    <p>Trân trọng,</p>
                                    <p>Đội Ngũ Quản Lý Ô Nhiễm</p>
                                </div>
                                <div class="footer">
                                    <p>&copy; Air Monitoring System.</p>
                                </div>
                            </div>
                        </body>
                        </html>`
      sendEmail("trannamphuong040608@gmail.com","Alert from Air Monitoring System","Abc",htmlContent)
    }
  });
});

mqttClient.on("error", function (error) {
  console.log("Unable to connect: " + error);
  // process.exit(1);
});

module.exports = mqttClient;
