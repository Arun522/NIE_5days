
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoggedInHeader from "../header/LoggedInHeader";
import trainersService from "../services/TrainersService";
function TrainerList() { 
    const [trainers, setTrainers] =  useState([]);
    const navigate = useNavigate();

    const callToReadAllTrainers = async function(){
        let axiosResponse; 
        
        try{
            axiosResponse = await trainersService.readAll();
        }
        catch(error){
            alert('Server Error');
            return;
        }
        
        const json =  axiosResponse.data; 
        
        setTrainers(json.data); 
    }

    useEffect(() => { 
        callToReadAllTrainers();
    }, []);

    const deleteByTrainer = async function(trainer){
        if(!window.confirm(`Are you sure to delete the trainers '${trainer.name}'?`)){
            return;
        }
        const axiosResponse = await trainersService.delete(trainer._id);
        const json = axiosResponse.data;
        alert(json.data.message);
        console.log(`${trainer.name} has been deleted successfully`);
        callToReadAllTrainers();
    }

    return(
        <>  
        <LoggedInHeader/>

        <div className="container">
            <h3>Trainers List</h3>
            <a href="/trainers/add" className="btn btn-success">Add Trainers</a>
            <table class="table table-stripped table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    { trainers.map(trainer => 
                    {
                        return (
                            <tr>
                                <th scope="row">{trainer._id}</th>
                                <td width="60%">{trainer.name}</td>
                                <td>
                                    <a href={"/trainers/edit/" + trainer._id} className="btn btn-warning">Edit</a>&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={ 
                                                function(event) { 
                                                    deleteByTrainer(trainer); 
                                                } 
                                            }>Delete</button>
                                
                                    
                                </td>
                            </tr>
                        );
                    } 
                    ) }    
                </tbody>
            </table>
        </div>
    </>
    );
}

export default TrainerList;