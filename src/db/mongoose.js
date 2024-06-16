const mongoose = require('mongoose');
const { db } = require('../config/index');

// const uriString = `mongodb://${db.hostname}:${db.port}`;
const uriString = `mongodb://iot:newpassword@171.251.89.96:8915/iot?directConnection=true`;
console.log("Db name is ",db.name);

//singleton design pattern
class Database {
    static instance;
    constructor(){
        this.connect();
    }
    async connect(type='mongodb'){
        //dev environment
        // if(1==1){
        //     mongoose.set("debug",true);//like a console
        //     mongoose.set("debug",{color:true}); 
        // }
        // console.log(uriString);
        try {
            await mongoose.connect(uriString);
            console.log("Connected MongoDB!!!");
        } catch (err) {
            console.log(">> Error:", err);
        }
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
