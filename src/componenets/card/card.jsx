import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";

export default function Card({data}) {
	console.log(data);
	return (
		<div className="ui card">
			<div className="image">
				<img src={data.avatar} />
			</div>
			<div className="content">
				<div className="header">
					Model: {data.model}
				</div>
				<div className="description">
					In Stock: {data.inStock}
				</div>
			</div>
			<div>
				<Link to={`/edit/:${data.id}`} className={"ui button"}>
					Edit
				</Link>
				<Button
					text="Delete"
					value="delete"
					style=""
					onClick={data.onClick}
				/>
			</div>
		</div>
	)
}
