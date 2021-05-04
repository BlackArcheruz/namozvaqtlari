import {useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),3000)
  },[]);
  return (
    <>
    {loading === false ? 
    <Router>
    <Navbar/> 
    <Switch>
      <Route exact path="/">
    <Home/> 
    </Route>
    <Route exact path="/about">
    <About/> 
    </Route>
    </Switch>
    </Router>
    : 
    <Loading/>}
    </>
  );
}

export default App;
