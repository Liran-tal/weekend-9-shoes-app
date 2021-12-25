import React from "react";
import Api from "../../Api/Api";
import ItemEditor from "../itemEditor/itemEditor";


export default class extends React.Component {

	state = {
		item: {
			model: "",
			inStock: 0,
			avatar: "",
			id: ""
		},
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

	onChange = ({target}) => {
		this.setState((prevState) => ({
			...prevState,
			item: {
				...prevState.item,
				[target.name]: target.value,
			}
		}))
	}

	onSubmit = async (event) => {
		event.preventDefault();

		if (event.target.value === "add") {
			try {
				return await Api.addItem(this.state.item);	
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			return await Api.editItem(this.state.item);	
		} 
		catch (error) {
			console.error(error);	
		}
	}

	render () {
		return(
			// <ItemEditor 
			// 	item={this.state.item}
					// getChangedItemId={this.props.getChangedItemId}
			// />
			<>Edit Page</>
		)
	}
}