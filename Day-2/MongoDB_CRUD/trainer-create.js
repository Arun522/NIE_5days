const mongoose = require("mongoose");

const mongo_url = "mongodb+srv://root:root1@cluster0.dkqn9.mongodb.net/";

const connectToMongo = async () => {
    mongoose.Promise = global.Promise;
    
    try {
        await mongoose.connect(mongo_url);
        console.log("Connected to database"); 
    } catch (error) {
        console.log("Cannot connect to database", error);
        process.exit();
    }
};

const TrainerModel = (() => {
    const collection_name = 'trainer';
    const collection_fields = {
        name: String, 
        location: String,
        technology: String, 
        phone_number: String
    };
    const collection_config = {
        timestamps: false
    };
    
    const schema = mongoose.Schema(collection_fields, collection_config);
    const Model = mongoose.model(collection_name, schema);

    return Model;
})();

const createTrainer = async () => {
    await connectToMongo(); // Ensures connection is established before proceeding

    try {
        const trainerModel = new TrainerModel({
            _id: new mongoose.Types.ObjectId(),
            name: 'Arun',
            location: 'Bangalore',
            technology: 'MERN',
            phone_number: '6667771111'
        });
        
        const createdDocument = await trainerModel.save();
        console.log("Trainer Created:", createdDocument);
    } catch (error) {
        console.error("Error creating trainer:", error);
    } finally {
        await mongoose.disconnect(); // Cleanly disconnect after the operation
        console.log("Disconnected from database");
    }
};

createTrainer();
