import "./App.css";
import Colorgame from "./pages/Colorgame";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";

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
