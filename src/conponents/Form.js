import React from 'react'

import { useState } from 'react';
import axios from 'axios';

function Form() {

    const [ city, setCity ] = useState("");
    const getWeather = (event)=> {
        event.preventDefault();
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/133328?apikey=ZGMFxx4xhvbrwQgXbRD5qE4Qq1p44zV8")
        .then(res=> console.log(res));
    }

  return (
    <div className="container mb-3">
        <div className='row'>
            <form>
                <input className="form-control" 
                       type="text"
                       name="city"
                       id="city"
                       placeholder="Input City"
                       onChange={event => setCity(event.target.value)} />
                <button type="submit" 
                        className="btn btn-primary col"
                        onClick={getWeather}
                        >
                        Get Weather
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form