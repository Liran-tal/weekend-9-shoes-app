import React from "react";
import { Link } from "react-router-dom";
import Api from "../../Api/Api";
import Card from "../card/card";
import Loader from "../Loader/loader";


export default class Main extends React.Component {

	state = {
		data: [],
	}


	// Get data from API


	componentDidMount = () => {
		this.apiToState();
	}

	displayData = () => {
		if (this.state.data.length < 1) {
			return <Loader />
		}

		return (
			this.state.data.map((shoe) => {
				return (<Card 
						key={shoe.id} 
						data={shoe} 
						onItemDelete={this.onDelete}
						onItemEdit={this.props.onItemEdit}
					/>
				)
			})
		)
	}

	componentDidUpdate = () => {
		if (this.props.itemChangedId)	{	
			this.apiToState();
		}
	}

	// Delete items


	onDelete = async ({target}) => {
		try {
			if (await Api.deleteItem(target.id)) {
				this.apiToState();
			}
		} 
		catch (error) {
			console.log(error);
		}
	}


	// General functions


	apiToState = async () => {
		try {
			const { data } = await Api.getData('');
			this.setState({data: data});
		} 
		catch (error) {
			console.log(error);	
		}
	}

	findItem = (id) => {
		return this.state.data.find((item) => {
			return id === item.id;
		})
	}

	render () {
		return (
			<div>
				<Link 
					to={"/item"} 
					className="ui primary grey button"
					style={{margin:"10px", textAlign: "center"}}
				>
					<i className="plus circle icon"></i>
				</Link>
				<div className="ui cards">
					{this.displayData()}
				</div>
			</div>
		)
	}
}