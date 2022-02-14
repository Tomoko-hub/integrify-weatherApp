import React from 'react'


function Form(props) {


  return (
    <div className="container mb-3">
        <div className='row'>
            <form>
                <input className="form-control" 
                       type="text"
                       name="city"
                       id="city"
                       placeholder="Input City"
                       onChange={event => props.setCity(event.target.value)} />
                <button type="submit" 
                        className="btn btn-primary col"
                        onClick={props.getWeather}
                        >
                        Get Weather
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form