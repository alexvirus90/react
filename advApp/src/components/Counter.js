import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {increment} from "../AC"

class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number,
		increment: PropTypes.func.isRequired
	}

	render() {
		return (
			<div>
				<h2>{this.props.counter}</h2>
				<button onClick = {this.handleIncrement}>Increment me</button>
			</div>
		);
	}
	handleIncrement = () => {
		// this.props.dispatchIncrement()	//es5 ONE
		const {increment} = this.props
		increment()						//es6 TWO and THREE
	}
}

				/*
				 ----- ONE -----
				*/

/*function mapStateToProps(state) {
	return {
		counter: state.count
	}
}

const mapToDispatch = {
	dispatchIncrement: increment					//es5
}

const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(Counter)*/

				/*
				 ----- TWO -----
				*/

/*function mapStateToProps(state) {
	return {
		counter: state.count
	}
}

const mapToDispatch = { increment } 		//es6

const decorator = connect(mapStateToProps, mapToDispatch)

export default decorator(Counter)*/

/*
				 ----- THREE -----
				*/

export default connect((state) =>({
	counter: state.count
}), { increment })(Counter)