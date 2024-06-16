const Room = require('../app/models/room.model.js');
const Device = require('../app/models/device.model.js');

// Get all room
const getAllRoomDb = async(query) => {
    const [totalRooms, rooms] = await Promise.all([
        Room.find(query).count(),
        Room.find(query),
    ]);
    return {
        rooms,
        totalRooms,
    }
};

// Get room (more)
const getRoomDb = async(query) => {
    const room = await Room.findOne(query);

    return room;
};

// Get all devices in room
const getDeviceInRoom = async(query) => {
    const devices = await Device.find(query);

    return devices; 
}

// Insert one room
const createRoomDb = async(query) => {
    const room = await new Room(query).save();

    return room;
}

// Delete one room 
const deleteRoomDb = async(query) => {
    const rs = await Room(query).delete();

    return rs;
}

// Edit one room 
const editRoomDb = async(query) => {
    const { _id, roomName } = query;
    try {
        const room = await Room.findByIdAndUpdate({ _id }, { roomName });
        return room;
    } catch (error) {
        console.error(`Error when edit room: ${error.message}`);
    }
}

module.exports = {
    getAllRoomDb,
    getRoomDb,
    createRoomDb,
    getDeviceInRoom,
    deleteRoomDb,
    editRoomDb,
};
