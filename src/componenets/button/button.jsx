import React from "react";


export default function Button({text, value, style, onClick}) {
	return (
		<button 
			class={"ui button " + style}
			onClick={onClick}
			value={value}
		>
			{text}
		</button>			
	)
}