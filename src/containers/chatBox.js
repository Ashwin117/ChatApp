import React, { Component } from 'react';
import { submitText } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import messagesList from '../components/messagesList';

class ChatBox extends Component {
	handleFormSubmit(event) {
		this.props.submitText(event);
		event.preventDefault();
		event.target[0].value = "";
	}
	render() {
		return (
			<div>
				{messagesList(this.props)}
				<form onSubmit={this.handleFormSubmit.bind(this)}>
				    <input type="text" className="form-control" placeholder="Text"/>
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
