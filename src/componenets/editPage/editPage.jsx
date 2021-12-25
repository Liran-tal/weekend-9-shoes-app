import React from "react";
import Api from "../../Api/Api";
import ItemEditor from "../itemEditor/itemEditor";


export default class extends React.Component {

	state = {
		item: {},
		isEdit: false,
	}

	componentDidMount = async () => {
		if (!this.props.id) {
			return;
		}
		
		try {
			console.log(this.props);
			const item = await Api.getData('' + this.props.id);
			this.setState({item: item, isEdit: true});
		} 
		catch (error) {
			console.error(error);
		}
	}

	onChange = () => {

	}

	onSubmit = () => {

	}

	render () {
		return(
			// <ItemEditor 
			// 	item={this.state.item}	
			// />
			<>Edit Page</>
		)
	}
}