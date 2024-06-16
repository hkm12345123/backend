const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const speechHandler = require("../../services/speech.flask.service");
const { getRoomDb, getDeviceInRoom } = require("../../db/room.db");
const { editDeviceDb, getFilterDevice } = require("../../db/device.db");
const mqttClient = require("../../services/mqtt.service");
const smart_home_cd = "smart_home_control_device";

const handleSpeech = async (req, res, next) => {
    const userId = req.user._id;
    const { message } = req.body;
    const rs = await speechHandler(message);
    console.log("rs>>",rs)
    if(rs.action == "undef"){
        return res.status(400).json(
            apiResponse({
                status: APIStatus.FAIL,
                msg: "đây không phải là một lệnh điều khiển"
            })
        )
    }
    const room = await getRoomDb({ roomName: rs.location })
    if (!room) {
        return res.status(400).json(
            apiResponse({
                status: APIStatus.FAIL,
                msg: "nhà của bạn không có phòng tương ứng"
            })
        )
    }

    const devices = await getFilterDevice({ roomId: room._id.toString() })
    if (devices.length == 0) {
        return res.status(400).json(
            apiResponse({
                status: APIStatus.FAIL,
                msg: "bạn chưa có thiết bị tại phòng tương ứng"
            })
        )
    }
    const device = devices.filter((device) => device.deviceName == rs.object);
    const result = await Promise.all(
        device.map(async (device) => {
            const check = await editDeviceDb({ status: rs.action, _id: device._id })
            if (!check) {
                return res.status(500).json(
                    apiResponse({
                        status: APIStatus.FAIL,
                        msg: "loi khi luu trang thai thiet bi"
                    })
                )
            }
            return {
                status: rs.action,
                deviceId: device.deviceId
            }
        })
    );
    result.forEach(async (result) => {
        mqttClient.publish(smart_home_cd, JSON.stringify(result))
    })

    let resAction = "";
    if (rs.object !== "door") {
        resAction = rs.action == "on" ? "bật" : "tắt";
    }
    else {
        resAction = rs.action == "on" ? "mở" : "đóng";
    }
    const resDevice = rs.object == "light" ? "đèn" : rs.object == "fan" ? "quạt" : "cửa";
    const resLocation = rs.location;
    console.log(`Đã ${resAction} ${resDevice} tại ${resLocation}`)
    return res.status(200).json(
        apiResponse({
            status: APIStatus.SUCCESS,
            msg: `Đã ${resAction} ${resDevice} tại ${resLocation}`,
        })
    );
}

module.exports = handleSpeech;