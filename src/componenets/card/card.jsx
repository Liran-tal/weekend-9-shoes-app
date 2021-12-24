import React from "react";
import Button from "../button/button";


export default function Card(props) {

	return (
		props.isEdit 
			? displayEdit(props) 
			: displayCArd(props)
	)
}

function displayCArd(props) {
	return (
		<div class="ui card">
			<div class="image">
				<img src={props.data.avatar} />
			</div>
			<div class="content">
				<div class="header">
					Model: {props.data.model}
				</div>
				<div class="description">
					In Stock: {props.data.inStock}
				</div>
			</div>
		</div>
	)	
}