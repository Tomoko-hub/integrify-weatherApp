import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './conponents/Home';
import Form from './conponents/Form';
import Card from './conponents/Card';

function App() {

  const [ city, setCity ] = useState("");
  const [ result, setResult ] = useState({
    country: "",
    cityName: "",
    temperature: "",
    icon: "",
    iconPhrase: ""
  });

    const getWeather = (event)=> {
        event.preventDefault();
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/133328?apikey=ZGMFxx4xhvbrwQgXbRD5qE4Qq1p44zV8")
        .then(res=> console.log(res));
    }

  return (
    <div className="App">
      <h1>Tämä on App Component</h1>
      <Home />
      <Form setCity={setCity} getWeather={getWeather} />
      <Card />
    </div>
  );
}

export default App;
