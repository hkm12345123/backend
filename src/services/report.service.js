const sendEmail = require("../utils/sendEmail")
const {getAverageDataForToday, } = require("../db/sensor.db")
const report = async () => {
    const now = new Date().toLocaleString()
    const result = await getAverageDataForToday()
    // console.log(result)
    const tableRows = result.map(result => {
        switch (result.locationId) {
            case "62616bb00aa850983c21b11b":
              location = "Tòa Trung Tâm"
              break;
            case "62616bcfadb8c6e0f01e49dc":
              location = "Sân Vận Động"
              break;
            case "62618a2af73fe211513926c8":
              location = "Khu D"
              break;
            case "62a9dc30092f09dc52362d94":
              location = "Khu E"
                break;
            default:
              location = "Khu vực khác"
              break;
          }
        return `<tr>
                    <td>${location}</td>
                    <td>${result.avgAqiPm25.toFixed(2)}</td>
                </tr>`;
    }).join("");
    const htmlContent = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="wth=device-wth, initial-scale=1.0">
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f4f4f4;
                                    margin: 0;
                                    padding: 20px;
                                }
                                .container {
                                    max-wth: 600px;
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
                                    wth: 100%;
                                    border-collapse: collapse;
                                    margin-top: 20px;
                                }
                                .content table, .content th, .content td {
                                    border: 1px sol #dddddd;
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
                                    <h1>Báo Cáo Mức Độ Ô Nhiễm Trong Ngày</h1>
                                </div>
                                <div class="content">
                                    <h2>Kính gửi Quý Khách Hàng,</h2>
                                    <p>Chúng tôi muốn thông báo cho bạn về tình trạng ô nhiễm không khí mà hệ thống thực hiện thu thập trong ngày. Dưới đây là các chỉ số :</p>
                                   <table>
                                        <thead>
                                            <tr>
                                                <th>Location ID</th>
                                                <th>Average AQI PM2.5</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${tableRows}
                                        </tbody>
                                    </table>
                                    <p>Chúng tôi khuyến nghị bạn nên thực hiện các biện pháp bảo vệ sức khỏe khi ra ngoài, đặc biệt là đối với người già và trẻ nhỏ.</p>
                                    <p>Trân trọng,</p>
                                    <p>Thời gian: <b><i>${now}</i></b></p>
                                </div>
                                <div class="footer">
                                    <p>&copy; Air Monitoring System.</p>
                                </div>
                            </div>
                        </body>
                        </html>`
    sendEmail(["trannamphuong040608@gmail.com",],"Alert from Air Monitoring System","Abc",htmlContent)
}

module.exports = report
