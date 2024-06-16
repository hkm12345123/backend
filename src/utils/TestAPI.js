// Tạo bảng điện năng tiêu thụ theo tháng

const axios = require("axios");
const moment = require("moment");

var date_string = "2021-06";
function getDaysArrayByMonth() {
  var daysInMonth = moment(date_string, "YYYY-MM").daysInMonth();
  var arrDays = [];
  while (daysInMonth) {
    var current = moment(date_string, "YYYY-MM").date(daysInMonth);
    arrDays.push(current);
    daysInMonth--;
  }
  return arrDays;
}
const arr = getDaysArrayByMonth();
const data_arr = arr.map((item, index) => {
  let obj = {
    dateTime: item,
    activePower: Math.floor(Math.random() * 40 + 10),
  };
  axios
    .post("http://localhost:4000/api/v1/meter-powers", obj, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVjMzkzZjhmNGFmYzljYTY1OTUwOTYiLCJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VybmFtZSI6ImtoYW5nMTIzNDU2NyIsImVtYWlsIjoia2hhbmcxMjMxMkBnbWFpbC5jb20iLCJpYXQiOjE2NTY1MTYzMDEsImV4cCI6MTY1Njg3NjMwMX0.eYqEPJ0wwJXszt0zQz7P-YjmxuF_w-fEej1yM8kUQW8",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return obj;
});
