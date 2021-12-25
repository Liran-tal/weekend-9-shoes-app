import React from "react";
import Api from "../../Api/Api";
import ItemEditor from "../itemEditor/itemEditor";


export default class EditPage extends React.Component {

	defaultState = () => {
		return (
			{
				item: {
					model: "",
					inStock: 0,
					avatar: "",
					id: ""
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
				await Api.addItem(this.state.item);	
				this.setState(this.defaultState());
				return ;
			} 
			catch (error) {
			console.error(error);	
			}
		}

		try {
			await Api.editItem(this.state.item);	
			this.setState(this.defaultState());
			return ;
		} 
		catch (error) {
			console.error(error);	
		}
	}

	render () {
		return(
			<ItemEditor 
				item={this.state.item}
				onChange={this.onChange}
				onSubmit={this.onSubmit}
				getChangedItemId={this.props.getChangedItemId}
			/>
			// <>Edit Page</>
		)
	}
}