import React from 'react'

import { useState } from 'react';

function Form() {

    const [ city, setCity ] = useState("");

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
                       {city}
                <button type="submit" 
                        className="btn btn-primary col">
                        Get Weather
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form