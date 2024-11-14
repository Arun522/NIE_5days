import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TrainerList from "./trainers/TrainerList";
import TrainerAdd from "./trainers/TrainerAdd";
import TrainerEdit from "./trainers/TrainerEdit";

function App() {
  return (
    <div className="">      
        <BrowserRouter>            
        <Routes>  
            <Route path="/" element={<TrainerList/>} />

            <Route path="/trainers/list" element={<TrainerList/>} />
            <Route path="/trainers/add" element={<TrainerAdd/>} />
            <Route path="/trainers/edit/:id" element={<TrainerEdit/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
