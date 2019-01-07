import React, {Component} from 'react';
import WeatherSearch from './WeatherSearch';
import Parks from './Parks';


class Projects extends Component {
	render(){
		return(
			<div>
 			<h1>Recent Projects</h1>
            	<div className="row">
	              <div className='col-md-6'>
	                <h2>Weather Watcher</h2>
	                <p>React app built using the <a href="https://openweathermap.org/api" target="_blank">Open Weather Map API</a> to access real time weather data and forecasts.</p>
	                <WeatherSearch />
	              </div>
	              <div className='col-md-6'>
	                <h2>Find a Park</h2>
	                <p>React app built using the <a href="https://www.nps.gov/subjects/developer/api-documentation.htm" target="_blank">National Park Service API</a> and <a href="https://www.wunderground.com/weather/api/" target="_blank">Weather Underground API</a> to search National Parks, see aprk info and real-time weather forecasts, and save parks to a favorites list.</p>
	                <Parks />
	              </div>
	            </div>
	            
	        </div>
		)	
	}
}

export default Projects;