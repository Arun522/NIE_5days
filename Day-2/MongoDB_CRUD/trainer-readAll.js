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

const readAllTrainers = async () => {
    await connectToMongo(); // Ensures the connection is established before querying

    try {
        const trainers = await TrainerModel.find();
        console.log("All Trainers:", trainers);
    } catch (error) {
        console.error("Error fetching trainers:", error);
    } finally {
        await mongoose.disconnect(); // Cleanly disconnect after the operation
        console.log("Disconnected from database");
    }
};

readAllTrainers();
