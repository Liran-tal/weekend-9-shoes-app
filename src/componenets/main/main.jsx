import React from "react";
import Api from "../../Api/Api";
import Card from "../card/card";


export default class Main extends React.Component {

	state = {
		data: [],
	}

	componentDidMount = async () => {
		try {
			const { data } = await Api.getData('');
			console.log(data);
			this.setState({data: data});
		} 
		catch (error) {
			console.log(error);
		}
	}

	displayData = () => {
		if (this.state.data.length < 1) {
			return (
				<div className="ui segment">
					<div className="ui active inverted dimmer">
						<div className="ui large text loader">Loading</div>
					</div>
				</div>
			)
		}

		console.log(this.state.data[0]);
		return (
			this.state.data.map((shoe) => {
				return (<Card key={shoe.id} data={shoe} />)
			})
		)
	}

	render () {
		return (
			<div>
				Hello
				<div className="ui cards">
					{this.displayData()}
				</div>
			</div>
		)
	}
}