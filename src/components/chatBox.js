import React, { Component } from 'react';
import { submitText } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatBox extends Component {

	render() {
		return (
			<div>
				<form onSubmit={this.props.submitText.bind(this)}>
				    <input type="text" className="form-control" 
				    	placeholder="Text"
				    	value={this.props.text}
				    />
					<button type="submit" className="btn btn-default">
						Enter
					</button>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		submitText: submitText
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(ChatBox);
