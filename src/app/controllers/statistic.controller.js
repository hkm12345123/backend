const { date } = require("joi");
const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const ObjectId = require("mongoose").Types.ObjectId;
const Sensor = require("../models/sensor.model");

const getAverageDataForLast7Days = async (req, res) => {
    const filter = req.query.filter
    // console.log(filter)
    const now = new Date();
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 6);
    
    try {
        const result = await Sensor.aggregate([
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
                    avgPm25: 1
                },
            },
        ]);

        // Create a date range for the last 7 days
        const dateRange = [];
        for (let d = sevenDaysAgo; d <= now; d.setDate(d.getDate() + 1)) {
            dateRange.push({
                year: d.getFullYear(),
                month: d.getMonth() + 1, // getMonth() is zero-based
                day: d.getDate(),
                avgTemperature: 0,
                avgHumidityAir: 0,
                avgCO: 0,
                avgSo2: 0,
                avgPm25: 0
            });
        }

        // Merge the result with the date range
        const mergedResult = dateRange.map(date => {
            const match = result.find(r => r.year === date.year && r.month === date.month && r.day === date.day);
            if (match) {
                return match;
            }
            return date;
        });

        // console.log(mergedResult);
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
