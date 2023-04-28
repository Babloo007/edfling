import { BrowserRouter, Routes, Route } from "react-router-dom";


import Expert from './components/UI/expertsList/expertList.jsx';
import Signup from './components/UI/signup/signup.jsx';
import Home from './components/UI/Home/home.jsx';
import IdExpert from "./components/UI/ID_Expert/idExpert.jsx";

import './app.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/" element={ <Home /> }/>
          <Route path="/experts" element={ <Expert /> } />
          <Route path="/expert/:id" element={ <IdExpert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
