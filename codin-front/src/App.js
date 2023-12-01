import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhoAreWer from "./components/WhoAreWer";
import OverView from "./components/OverView";
import Events from "./components/Events";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import {Route, Router, Switch} from "react-router-dom";
import Ihack from "./components/Ihack";

function App() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the offset as needed
      const homeOffset = document.getElementById('Home').offsetTop;
      const overtOffset = document.getElementById('Overview').offsetTop;
      const eventOffset = document.getElementById('Events').offsetTop;

      if (scrollPosition < overtOffset) {
        setActiveSection('Home');
      } else {
        setActiveSection('Who');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
    <div className="App">
      <Navbar activeSection={activeSection}/>
       <Switch>
        <Route exact path ="/">
          <div className="content">
            <Home/>
            <WhoAreWer/>
            <OverView/>
          <Events/>
          </div>
       </Route>
       <Route path="/Ihack">
         <div>
          <Ihack/>
         </div>
       </Route>
       </Switch>
      <Footer/>
    </div>
</Router>
  );
}

export default App;
