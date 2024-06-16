const Sensor = require("../app/models/sensor.model.js");

// Get one sensor
const getSensorDb = async (query) => {
  const sensors = await Sensor.findOne(query).sort({
    _id: -1, // mới nhất đến cũ nhất
  });
  // console.log(sensors);
  return {
    sensors,
  };
};

// get data from sensor
const getDataSensorDb = async (query) => {
  const { dateBegin, dateEnd, miniRange } = query;
  //lấy thông tin theo các mốc thời gian
  const rs = await Sensor.find({
    createdDate: {
      $gte: dateBegin.get("time"),
      $lte: dateEnd.get("time"),
    },
  }).sort({ field: "asc", _id: -1 });

  //Biến lưu danh sách kết quả trung bình, kết quả trung bình chia làm 20 khoảng
  var result = [];
  for (let i = start; i < end; i += miniRange) {
    let value = {
      // humidityLand: 0,
      humidityAir: 0,
      temperature: 0,
    };

    //biến lưu số bản ghi trong một khoảng thời gian
    let count = 0;
    let arr = rs.filter((obj) => {
      return (
        moment(obj.createdDate).valueOf() > i &&
        moment(obj.createdDate).valueOf() < i + miniRange
      );
    });
    if (Array.isArray(arr) && arr.length) {
      arr.forEach((item, index) => {
        if (item && item !== "null" && item !== "undefined") {
          // value.humidityLand += item.humidityLand;
          value.humidityAir += item.humidityAir;
          value.temperature += item.temperature;
          count++;
        }
      });
    }
    //nếu trong khoảnh thời gian không có bản ghi nào thì count = 0 => 0/0 = null;
    if (count != 0) {
      // value.humidityLand = value.humidityLand / count;
      value.humidityAir = value.humidityAir / count;
      value.temperature = value.temperature / count;
    }
    result.push(value);
  }
  return result;
};

// Insert data
const insertDataSensorDb = async (query) => {
  const { humidityAir, temperature } = query;

  const rs = await new Sensor({ humidityAir, temperature }).save();
  return rs;
};

module.exports = {
  getSensorDb,
  getDataSensorDb,
  insertDataSensorDb,
};
