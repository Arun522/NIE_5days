class AppRoutes {   
    trainers = (trainersController) => {
        app.post("/trainers",  trainersController.create);             
        app.get("/trainers",  trainersController.readAll);     
        app.get("/trainers/:id", trainersController.readById);
        app.put("/trainers/:id", trainersController.update);
        app.delete("/trainers/:id", trainersController.remove);
    }
    
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;