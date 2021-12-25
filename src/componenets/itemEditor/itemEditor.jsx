import React from "react";


export default async function itemEditor(props) {
	

	return (
		<form className="ui form" onSubmit={props.onSubmit}>
			<label>
				Model:
				<div className="field">
					<input 
						type="text" 
						defaultValue={props.item.model} 
						placeholder="Item model"
						onChange={props.onChange}
					/>
				</div>
			</label>
			<label>
				Items in stock:
				<div className="field">
					<input 
						type="text" 
						defaultValue={props.item.inStock} 
						placeholder="Items in stock"
						onChange={props.onChange}
					/>
				</div>
			</label>
			<label>
				Image
				<div className="field">
					<input 
						type="text" 
						defaultValue={props.item.avatar} 
						placeholder="https://this-image-url.com"
						onChange={props.onChange}
					/>
				</div>
			</label>
			
			<button 
				className="ui button" 
				type="submit"
				onClick={props.getChangedItemId}
			>
				Submit
			</button>

		</form>
	)
}
