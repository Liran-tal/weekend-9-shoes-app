import React from "react";
import Api from "../../Api/Api";


export default class Main extends React.Component {

	state = {
		data: [],
	}

	componentDidMount = async () => {
		try {
			const { data } = await Api.get('');
			console.log(data);
			this.setState({data: data});
		} 
		catch (error) {
			console.log(error);
		}
	}

	displayData = () => {
		console.log(this.state.data[0]);
		return (
			this.state.data.map((shoe) => {
				return (<div>{shoe.model}</div>)
			})
		)
	}

	render () {
		return (
			<div>
				Hello
				<div>
					{this.displayData()}
				</div>
			</div>
		)
	}
}