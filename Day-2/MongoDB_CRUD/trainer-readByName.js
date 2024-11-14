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

const readByName = async () => {
    await connectToMongo();  // Ensures the connection is established before proceeding
    
    try {
        const trainer = await TrainerModel.findOne({ name: 'Arun' });
        if (trainer) {
            console.log("Trainer found:", trainer);
        } else {
            console.log("Trainer not found");
        }
    } catch (error) {
        console.error("Error finding trainer:", error);
    } finally {
        await mongoose.disconnect();  // Cleanly disconnect after the operation
        console.log("Disconnected from database");
    }
};

readByName();
