const { date } = require("joi");
const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const ObjectId = require("mongoose").Types.ObjectId;
const Sensor = require("../models/sensor.model");
const Mq135 = require("../models/mq135.model")

const getAverageDataForLast7Days = async (req, res) => {
    const filter = req.query.filter;
    const now = new Date();
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 6);

    try {
        // Lấy dữ liệu từ collection Sensor
        const sensorData = await Sensor.aggregate([
            {
                $match: {
                    locationId: filter,
                    createdDate: {
                        $gte: sevenDaysAgo,
                        $lte: now,
                    },
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: '$createdDate' },
                        month: { $month: '$createdDate' },
                        day: { $dayOfMonth: '$createdDate' },
                    },
                    avgTemperature: { $avg: '$temperature' },
                    avgHumidityAir: { $avg: '$humidityAir' },
                    avgCO: { $avg: '$CO' },
                    avgSo2: { $avg: '$so2' },
                    avgPm25: { $avg: '$pm25' },
                },
            },
            {
                $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 },
            },
            {
                $project: {
                    _id: 0,
                    year: '$_id.year',
                    month: '$_id.month',
                    day: '$_id.day',
                    avgTemperature: 1,
                    avgHumidityAir: 1,
                    avgCO: 1,
                    avgSo2: 1,
                    avgPm25: 1,
                },
            },
        ]);

        // Lấy dữ liệu từ collection Mq135
        const mq135Data = await Mq135.aggregate([
            {
                $match: {
                    locationId: filter,
                    createdDate: {
                        $gte: sevenDaysAgo,
                        $lte: now,
                    },
                },
            },
            {
                $group: {
                    _id: {
                        year: { $year: '$createdDate' },
                        month: { $month: '$createdDate' },
                        day: { $dayOfMonth: '$createdDate' },
                    },
                    avgMq135: { $avg: '$mq135' },
                },
            },
            {
                $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 },
            },
            {
                $project: {
                    _id: 0,
                    year: '$_id.year',
                    month: '$_id.month',
                    day: '$_id.day',
                    avgMq135: 1,
                },
            },
        ]);

        // Tạo dải ngày (date range)
        const dateRange = [];
        for (let d = new Date(sevenDaysAgo); d <= now; d.setDate(d.getDate() + 1)) {
            dateRange.push({
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate(),
                avgTemperature: 0,
                avgHumidityAir: 0,
                avgCO: 0,
                avgSo2: 0,
                avgPm25: 0,
                avgMq135: 0,
            });
        }

        // Hợp nhất dữ liệu Sensor và Mq135 vào dateRange
        const mergedResult = dateRange.map(date => {
            const sensorMatch = sensorData.find(
                r => r.year === date.year && r.month === date.month && r.day === date.day
            );
            const mq135Match = mq135Data.find(
                r => r.year === date.year && r.month === date.month && r.day === date.day
            );
            return {
                ...date,
                ...(sensorMatch || {}),
                avgMq135: mq135Match ? mq135Match.avgMq135 : 0,
            };
        });

        return res.status(200).json(
            apiResponse({
                status: APIStatus.SUCCESS,
                data: mergedResult,
                message: "getAverageDataForLast7Days successfully",
            })
        );
    } catch (err) {
        console.error('Error fetching data', err);
        return res.status(500).json(
            apiResponse({
                status: APIStatus.FAIL,
                message: err.message,
            })
        );
    }
};


module.exports = {
    getAverageDataForLast7Days,
};
