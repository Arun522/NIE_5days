import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import LoggedInHeader from "../header/LoggedInHeader";
import trainersService from '../services/TrainersService';


function TrainerAdd() { 
    
    const initTrainer = {
        name:"", 
        location:"",
        technology:"", 
        phone_number:""
    };
    const [trainer, setTrainer] = useState(initTrainer);
    const navigate =useNavigate();
    const onTextChange = function(event){
        const changedTrainer = {...trainer};
        changedTrainer[event.target.id] = event.target.value;
        setTrainer(changedTrainer);
    }
    const doCreateTrainer = async function(event){
        if(!window.confirm(`Are you sure to create the trainer '${trainer.name}'?`)){
            return;
        }
        const axiosResponse = trainersService.create({
            name:trainer.name, 
            location: trainer.location,
            technology: trainer.technology, 
            phone_number: trainer.phone_number
        });

        alert('Trainers is created successfully.');
        navigate("/trainers/list")
        console.log(`${trainer.name} has been created successfully`);
    }
    

    return(
        <>  <LoggedInHeader/>
        <div>
                <a href="/trainers/list" className="btn btn-light">&lt;&lt;Go Back</a>
                <h3>Add Trainer</h3>
                <div class="container">
                    <div className="form-group">
                        <label htmlFor="name">trainer name</label>
                        <input type="text" className="form-control" 
                        id="name" aria-describedby="nameHelp" placeholder="Enter trainer name"
                        value={trainer.name} onChange={onTextChange}/> 
                        <small id="nameHelp" className="form-text text-muted">Please enter name.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text" className="form-control" 
                        id="location" aria-describedby="locationHelp" placeholder="Enter trainer location"
                        value={trainer.location} onChange={onTextChange}/> 
                        <small id="locationHelp" 
                            className="form-text text-muted">Please enter location.</small>
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="technology">technology</label>
                        <input type="text" className="form-control" 
                        id="technology" aria-describedby="technologyHelp" placeholder="Enter trainer technology"
                        value={trainer.technology} onChange={onTextChange}/> 
                        <small id="technologyHelp" 
                            className="form-text text-muted">Please enter technology.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">phone_number</label>
                        <input type="text" className="form-control" 
                        id="phone_number" aria-describedby="phone_numberHelp" placeholder="Enter trainer phone_number"
                        value={trainer.phone_number} onChange={onTextChange}/> 
                        <small id="phone_numberHelp" 
                            className="form-text text-muted">Please enter phone_number.</small>
                    </div>   


                    <button type="button" class="btn btn-success"
                     onClick={doCreateTrainer}>Create Trainer</button>
                </div>
            </div>
    </>
    );
}

export default TrainerAdd;