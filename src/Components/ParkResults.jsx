import React, {Component} from 'react';
import FavParks from './FavParks';
let weatherApi = process.env.REACT_APP_WEATHER_KEY;
let weatherData;

class ListItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			location: '',
			url: '',
			name: '',
			weather:'',
			forecast: '',
			search: '',
			description: ''
		}
	}

	listHandler = () => {
		this.props.handleList(this.props.url, this.props.name)
	}
	

	forecastHandler = () => {
		this.setState({
			forecast: 'yes'
		})
	}

	hideHandler = () => {
		this.setState( {
			location: '',
			forecast: '',
		})
	}

	handleFailure = () => {
		console.log('error in weather call')
	}

	infoHandler = () => {
		let latlong = this.props.location;
		let split = latlong.split(':').slice(1,3).join().split(',');
  		let gone = split.splice(1,1);
  		let locationData = split.join()
  		let weatherUrl = '//api.wunderground.com/api/' + weatherApi + '/forecast10day/q/' +  locationData + '.json';
  		this.setState({
  			search: 'yes'
  		})
  		fetch(weatherUrl)
  			.then(response => {
  				return response.json()
  			}).then(json => {
  				this.setState({
  					name: this.props.name,
					location: this.props.location,
					url: this.props.url,
					description: this.props.description,
  					weather: json.forecast.txt_forecast.forecastday,
  					search: ''
  				}) 

  			}).catch(this.handleFailure)
	}
	render() {
		let location = this.state.location;
		let forecast = this.state.forecast;
		let search = this.state.search;

		return(	
			<div className='park-list'>
				{!location && !search &&
					<div>
						<li key={this.props.name}>
							{this.props.name}
							<button className='button' onClick={this.infoHandler}>More Info</button>
							<button className='button' onClick={this.listHandler}>Add to Park List</button>
						</li>
					</div>
				}

				{search && !location &&
					<div className='loading'>
						<h2>Loading...</h2>
					</div>
				}

				{location && !forecast &&
					<div className='forecast-div'>
						<h3 className='park-name'>{this.state.name}</h3>
						<p>{this.state.description}</p>
						<a href={this.state.url} target='_blank'>Visit Park Website</a>
						<p className="one-forecast">Weather forecast for {this.state.weather[0].title}: <img src={this.state.weather[0].icon_url} /></p>
						<p>{this.state.weather[0].fcttext}</p>
						<button onClick={this.hideHandler}>Hide Details</button>
						<button onClick={this.forecastHandler}>3 Day Forecast</button>
						<button onClick={this.listHandler}>Add to Park List</button>
					</div>
				}	

				{forecast &&
					<div className='forecast-div'>
						<h3 className='park-name'>{this.state.name}</h3>
						<a href={this.state.url} target='_blank'>Visit Park Website</a>
						<div>
							<div>
								<p>Weather forecast for {this.state.weather[0].title}: <img className ='weather-icon' src={this.state.weather[0].icon_url} /></p>
								<p>{this.state.weather[0].fcttext}</p>
							</div>
							<div>
								<p>Weather forecast for {this.state.weather[2].title}: <img src={this.state.weather[2].icon_url} /></p>
								<p>{this.state.weather[2].fcttext}</p>
							</div>
							<div>
								<p>Weather forecast for {this.state.weather[4].title}:<img src={this.state.weather[4].icon_url} /></p>
								<p>{this.state.weather[4].fcttext}</p>
							</div>
						</div>
						<button onClick={this.hideHandler}>Hide Details</button>
						<button onClick={this.listHandler}>Add to Park List</button>
					</div>
				}
			</div>
			
			)
	}
}

class ParkResults extends Component {
	constructor(props){
		super(props)
		this.state = {
			listData: []
		}
	}

	handleList = (url, name) => {
		let listArr = this.state.listData;
		listArr.push({
			name: name,
			url: url
		});
		this.setState({
			listData: listArr
		})
	}

	deleteItem = (item) => {
		let localList = this.state.listData;
		let itemIdx = localList.indexOf(item);
		localList.splice(itemIdx,1);
		this.setState({
			listData: localList
		})
	}
	render(){
		let parkList;
		if(this.props.results.length > 0){
			parkList = this.props.results.map(park => {
				return <ListItem name={park.fullName} location={park.latLong} url={park.url} description={park.description} handleList={this.handleList} handleFavInfo={this.handleFavInfo} />
			})
		}
		return (
			<div >
				<ul className='park-list'>
					{parkList}
				</ul>
				<FavParks data={this.state.listData} delete={this.deleteItem} />
			</div>
	
		)
	}
}

export default ParkResults;



