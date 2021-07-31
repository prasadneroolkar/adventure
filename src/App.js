import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/services" exact component={Services}/>
    <Redirect to ="/" />
    </Switch>
    <Footer/>
    </>
    
  );
}

export default App;
