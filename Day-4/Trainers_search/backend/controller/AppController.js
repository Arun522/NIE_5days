//server_port, mongo_url
class AppController{    
    serverInit  = () => {
        console.log(`Server is running on port ${server_port}`);
    }

    serverRootAction = (request, response) => {
        const rbody = { message: `Welcome To My Application` };
        response.send(rbody);
    }

    connectToMongo = async () => {
        mongoose.Promise = global.Promise;
        
        try {
            await mongoose.connect(mongo_url);

            console.log("Connected to database");  
        }
        catch( error ) {
            console.log("Cannot connect to database", error); 
            process.exit();
        }
    }
}

module.exports = AppController;