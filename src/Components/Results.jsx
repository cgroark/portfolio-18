import React, {Component} from 'react';
import '../App.css';

class Forecast extends Component {
	render(){
		let fahrenheitMax = Math.round(this.props.max * (9/5) -459.67);
		let fahrenheitMin = Math.round(this.props.min * (9/5) -459.67);
		let image = 'http://openweathermap.org/img/w/' + this.props.icon + '.png';
		let date = this.props.dt.split('').slice(5,10).join('')
		return(
			<div className='col-xs-2'>
				<h1>{date}</h1>
				<img src={image} />
				<p><strong>{fahrenheitMax}<sup> o </sup> F</strong></p>
				<p>{fahrenheitMin}<sup> o </sup> F</p>	
			</div>
		)
	}
}	
		
class Results extends Component{
	render(){
		let current = this.props.data
		const fiveDay = this.props.forecast.list.filter(item => {
    		return item.dt_txt[12] === '2' || item.dt_txt[11] === '2';
  		})
  		const forecastData = []
  		for(var i=0; i < fiveDay.length-1; i++){
  			if(fiveDay[i].dt_txt[12] === '2'){
  				forecastData.push({
  					date: fiveDay[i].dt_txt,
  					min: fiveDay[i].main.temp,
  					max: fiveDay[i+1].main.temp,
  					icon:fiveDay[i+1].weather[0].icon
  				})
  			}
  		}
  		console.log('forecastData',forecastData)
  		
  		const forecast = forecastData.map(each => {
			return <Forecast dt={each.date} min={each.min} max={each.max} icon={each.icon}/>
		})
		let currentF = Math.round(current.main.temp * (9/5) -459.67);
		return(
			<div>
				<div className='current-weather row'>
					<div className='col-xs-7'>
						<h1>{currentF}<sup>o F</sup></h1>
					</div>
					<div className='col-xs-5'>
						
						<p>{current.weather[0].description}</p>
						<p>{current.main.humidity}% Humidity</p>
					</div>
				</div>
				<div className='forecast row'>
					{forecast}
				</div>

			</div>
			)
	}
}

export default Results;