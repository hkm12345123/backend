const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const {
  getSensorDb,
  getDataSensorDb,
  insertDataSensorDb,
} = require("../../db/sensor.db");

// Get sensor
const getSensor = async (req, res, next) => {
  const sensor = await getSensorDb();

  return res
    .status(200)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: { ...sensor } }));
};

// Get data sensor
const getDataSensor = async (req, res, next) => {
  const {
    begin_month,
    begin_day,
    begin_hour,
    begin_minute,
    end_month,
    end_day,
    end_hour,
    end_minute,
  } = req.body;
  //ngày bắt đầu
  let dateBegin = moment({
    month: begin_month,
    date: begin_day,
    hour: begin_hour,
    minute: begin_minute,
  });
  //ngày kết thúc
  let dateEnd = moment({
    month: end_month,
    date: end_day,
    hour: end_hour,
    minute: end_minute,
  });
  //tính khoảng cách hai mốc thời gian
  let start = dateBegin.valueOf();
  let end = dateEnd.valueOf();
  let range = end - start;
  let miniRange = range / 20; //20 khoảng thời gian

  const rs = await getDataSensorDb({ dateBegin, dateEnd, miniRange });
  return res.status(204).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Get data sensor success",
      data: rs,
    })
  );
};

// insert 1 data
const insertDataSensor = async (req, res, next) => {
  const { humidityAir, temperature } = req.body;
  // const humidityAir = Math.floor(Math.random() * (100 - 80 + 1) + 80);
  // const temperature = Math.floor(Math.random() * (30 - 15 + 1) + 15);
  // kiểm tra subscriber đã có chưa

  const rs = await insertDataSensorDb({ humidityAir, temperature });

  return res.status(200).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Thêm mới thành công",
      data: rs,
    })
  );
};

module.exports = {
  getSensor,
  getDataSensor,
  insertDataSensor,
};
