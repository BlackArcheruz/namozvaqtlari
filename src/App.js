import {useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import PrayState from './context/prayers/PrayState'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),3000)
  },[]);
  return (
    <>
    {loading === false ? 
    <PrayState>
    <Router>
    <Navbar/> 
    <Switch>
      <Route exact path="/">
    <Home/> 
    </Route>
    </Switch>
    </Router>
    </PrayState>
    : 
    <Loading/>}
    </>
  );
}

export default App;
