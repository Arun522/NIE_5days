import { makeNotLoggedInApiCaller } from "./BaseService";

class TrainersService{
    TRAINERS_URL = "/trainers";
    create = (newTrainers) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.post(`${this.TRAINERS_URL}`, newTrainers);
    }
    readAll = () => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.get(`${this.TRAINERS_URL}`);
    }
    
    readOne = (id) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.get(`${this.TRAINERS_URL}/${id}`);
    } 
    update = (id, changedTrainers) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.put(`${this.TRAINERS_URL}/${id}`, changedTrainers);
    }
    delete = (id) => {
        const apiCaller = makeNotLoggedInApiCaller();
        return apiCaller.delete(`${this.TRAINERS_URL}/${id}`);
    }       
}

const trainersService = new TrainersService();
export default trainersService;