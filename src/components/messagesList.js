import React from 'react';


export default (props) => {
	if (props.text) {
		return (
			<div>
				{props.text}
			</div>
		);
	}
}