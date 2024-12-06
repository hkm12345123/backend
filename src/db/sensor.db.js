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
// get data by room
async function getSensorByRoomDb(roomId) {
  try {
    const latestSensorData = await Sensor.findOne({ locationId: roomId })
      .sort({ _id: -1 })  // Sort by createdDate in descending order to get the latest entry    
      .exec();

    // console.log(latestSensorData);
    return {
      latestSensorData
    }
  } catch (err) {
    console.error('Error fetching latest sensor data:', err);
  }
}

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
  const { humidityAir, temperature, pm25, location} = query;
  let locationId
  switch (location) {
    case 1:
      locationId = "62616bb00aa850983c21b11b"
      break;
    case 2:
      locationId = "62616bcfadb8c6e0f01e49dc"
      break;
    case 3:
      locationId = "62618a2af73fe211513926c8"
      break;
    case 4:
      locationId = "62a9dc30092f09dc52362d94"
        break;
    default:
      break;
  }
  try {
    const rs = await new Sensor({ humidityAir, temperature, pm25, locationId }).save();
    return rs;
  } catch (err) {
    console.log("Error when insert data from sensor")
  }
  
};

const getAverageDataForToday = async () => {
  const locationIds = ["62616bb00aa850983c21b11b","62616bcfadb8c6e0f01e49dc","62618a2af73fe211513926c8","62a9dc30092f09dc52362d94"];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Start of today
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // Start of tomorrow

  try {
      const result = await Sensor.aggregate([
          {
              $match: {
                  locationId: { $in: locationIds },
                  createdDate: {
                      $gte: today,
                      $lt: tomorrow,
                  },
              },
          },
          {
              $group: {
                  _id: '$locationId',
                  avgAqiPm25: { $avg: '$aqi_pm25' },
              },
          },
          {
              $project: {
                  _id: 0,
                  locationId: '$_id',
                  avgAqiPm25: 1,
              },
          },
      ]);

      return  result.length > 0 ? result : {}
  } catch (err) {
      console.error('Error fetching data', err);
  }
};

module.exports = {
  getSensorDb,
  getDataSensorDb,
  insertDataSensorDb,
  getSensorByRoomDb,
  getAverageDataForToday
};
