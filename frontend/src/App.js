import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PillButton from './Components/PillButton';
import Home from './Pages/Home';
// import Tool from './Pages/Tool';
// import About from './Pages/About';

function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar/>  {/*Link is causing the useRef issue*/}
      <Home/>
      <Footer/>
      <PillButton/>
      {/* <Routes>
        <Route exact path = "/" element={Home}></Route>
        <Route path = "/write" element={Tool}></Route>
        <Route path = "/about" element={About}></Route>
      </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
