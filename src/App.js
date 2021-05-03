import {useState, useEffect} from 'react'
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import InfoBox from './components/InfoBox'
import Main from './pages/Main'
import Random from './pages/Random'


function App() {


return (
<div className="App">
<Header />

<InfoBox />

<Switch>

<Route exact path="/">
<Main />
</Route>

<Route path="/Random">
<Random />
</Route>

</Switch>

<Footer />



</div>



)




  
  

}



 


export default App;
