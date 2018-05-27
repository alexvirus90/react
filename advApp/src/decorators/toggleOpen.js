import React, {Component as ReactComponent} from 'react'
export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
	state = {
		isOpen: false
	}

	/*componentDidMount(){
		console.log('mounting', );
	}

	componentDidUpdate(){
		console.log('updating', );
	}

	componentWillUnmount(){
		console.log('unmounting', );
	}*/

	render() {
		return <OriginalComponent {...this.props} /*isOpen = {this.state.isOpen}*/
															{...this.state}
															toggleOpen = {this.toggleOpen}
															ref = {this.getRef} />
	}

	toggleOpen = (ev) => {
		ev && ev.preventDefault && ev.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	getRef = (ref) => {
		// console.log('', ref);
	}
}