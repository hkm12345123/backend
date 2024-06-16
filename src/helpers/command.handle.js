const action =[
    "off",
     "on",
     "undef"
]
const location = [
    "Living room",
    "Bed room",
]
const object =[
    "light",
    "fan",
    "door"
]
const commandHandle = (result) => {
    return {
        action: action[result[0]],
        location: location[result[1]],
        object: object[result[2]]
    }
} 
module.exports = commandHandle;