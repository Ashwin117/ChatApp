import React, { Component } from 'react';
import { submitText } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import messagesList from '../components/messagesList';

class ChatBox extends Component {
	displayText() {
		var message = messagesList(this.props);
		return message
	}

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

function mapStateToProps(state) {
	return {
		text: state.text
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		submitText: submitText
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
