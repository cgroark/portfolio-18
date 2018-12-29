import React, {Component} from 'react';
let parkDataList;

class ListPark extends Component {
	deleteHandler = () => {
		this.props.delete(this.props.item);
	}

	render(){
		return(
			<div className='park-favs'>
				<h3><button onClick={this.deleteHandler}>X</button>
				
					{this.props.name}
				</h3>
				<a href={this.props.url} target='_blank'>Visit Park Website</a>
			</div>

			)
	}
}

class FavParks extends Component {
	render(){
		let listLength = this.props.data.length;
		if(listLength >= 1){
			parkDataList = this.props.data.map(park => {
				return <ListPark name={park.name} url={park.url} item={park} delete={this.props.delete} />
			})
		}
		return(
			<div className = 'fav-list'>
			<h3>Park List</h3>
			{listLength > 0 &&
				<div className=''>
						<div>
							{parkDataList}
						</div>
				</div>
			
			}

			{listLength === 0 &&
				<p>Click 'Add to Park List' to add parks here</p>
			}
			</div>
			
		)
	}
}

export default FavParks;