import React,{ Component } from 'react';
import ParkResults from './ParkResults';
import list from '../utils/states';
import { FaSearch } from 'react-icons/fa';
let api = process.env.REACT_APP_PARKS_KEY


class Parks extends Component {
	constructor(props){
		super(props)
		this.state = {
			park: '',
			parkData: [],
			search: ''
		}
	}
	handleSearchAgain = () => {
		this.setState({
			search: '',
			parkData: []
		})
	}
	handleChange = (e) => {
		this.setState({
			park: e.target.value
		})
	}
	handleFailure = () => {
		console.log('error in ParksAPI call')
	}
	handleSubmit = (e) => {
		e.preventDefault()
		let parksApi = "https://developer.nps.gov/api/v1/parks?stateCode=" + this.state.park + "&api_key=" + api;
		fetch(parksApi)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				let national = json.data.filter(park => {
					return park.designation === 'National Park'
				})
				this.setState({
					parkData: national,
					search: 'Yes'
				})
				console.log('stateeeeeee',this.state.parkData)
				console.log(list)
			}).catch(this.handleFailure)	
	}

	render() {
		const stateList = list.states.map(state => {
			return <option value={state.abbreviation}>{state.name}</option>
		})
		let search = this.state.search;
		return (
			<div className='park-form'>
				{!search &&
					<form className='park-search' onSubmit={this.handleSubmit}>
						<select required onChange={this.handleChange}>
                          <option value="" selected="selected">Select a State</option>
                          {stateList}
                    	</select>
						<button type='submit'><FaSearch /></button>
					</form>
				}
				{search &&
					<form>
						<button className='search-again' type='submit'onClick={this.handleSearchAgain}>Search Another State</button>
					</form>
				}
				{search && this.state.parkData.length === 0 &&
					<h2 className='error'>No Parks Found in This State</h2>
				}
				<ParkResults results={this.state.parkData} />
		
			</div>
		)
	}
}

export default Parks;

