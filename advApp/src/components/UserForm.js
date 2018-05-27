import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {

	static PropTypes = {

	}

	state = {
		username: ''
	}

	render() {
		return (
			<div>
				Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
			</div>
		);
	}

	handleUserChange = (ev) => {
		if(ev.target.value.length > 10) return; // ограничение по количеству введенных символов в input

		this.setState({
			username: ev.target.value
		})
	}
}
export default UserForm