import React from "react";
import { useParams } from "react-router-dom";
import Api from "../../Api/Api";


export default async function EditPage({id}) {
	

	return (
		<form className="ui form">
			<label>
				Model:
				<div className="field">
					<input 
						type="text" 
						defaultValue={item.model} 
						placeholder="Item model"
					/>
				</div>
			</label>
			<label>
				Items in stock:
				<div className="field">
					<input 
						type="text" 
						defaultValue={item.inStock} 
						placeholder="Items in stock"
					/>
				</div>
			</label>
			<label>
				Image
				<div className="field">
					<input 
						type="text" 
						defaultValue={item.avatar} 
						placeholder="https://this-image-url.com"
					/>
				</div>
			</label>
			
			<button className="ui button" type="submit">Submit</button>

		</form>
	)
}


// <Button
// 						id={id}
// 						style=" "
// 						onClick={this.createItem}
// 						value="create"
// 						text=
// 				/>