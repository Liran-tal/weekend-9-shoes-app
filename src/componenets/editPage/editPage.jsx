import React from "react";
import Api from "../../Api/Api";
import ItemEditor from "../itemEditor/itemEditor";


export default class EditPage extends React.Component {

	defaultState = () => {
		return (
			{
				item: {
					model: "",
					inStock: "",
					avatar: "",
					// id: ""
				},
				isEdit: false,
			}
		)
	}
	
	state = this.defaultState();

	componentDidMount = async () => {
		if (!this.props.id) {
			return;
		}
		
		try {
			const {data} = await Api.getData(this.props.id);
			this.setState({item: data, isEdit: true});
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
		console.log(event.target);
		console.log(event.target.value);
		if (event.target.value === "add") {
			try {
				console.log(this.state.item);
				await Api.addItem(this.state.item);	
				this.setState(this.defaultState());
				return ;
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			await Api.editItem(this.props.id, this.state.item);	
			this.setState(this.defaultState());
			return ;
		} 
		catch (error) {
			console.error(error);	
		}
	}

	render () {
		console.log(this.state);
		return(
			<ItemEditor 
				item={this.state.item}
				onChange={this.onChange}
				onSubmit={this.onSubmit}
				getChangedItemId={this.props.getChangedItemId}
				isEdit={this.state.isEdit}
			/>
			// <>Edit Page</>
		)
	}
}