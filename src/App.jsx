import "./App.css";
import Colorgame from "./component/Colorgame";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Forgot from "./component/Forgot";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deposit from "./component/deposit/Deposit";

function App() {
 
  return (
    <>
    <Router>
      <Routes>
        < Route exact path="/" element={<Registration />} />
        < Route exact path="/Login" element={<Login />} />
        < Route exact path="/Home" element={<Colorgame />} />
        < Route exact path="/ForgotPass" element={<Forgot />} />
        < Route exact path="/Deposit" element={ <Deposit />} />
      </Routes>
    </Router>
    
   
    
    {/*  */}
    </>
  );
}

export default App;
