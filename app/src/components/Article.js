import React, {Component, PureComponent} from 'react'

class Article extends /*Component*/ PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
		// this.handleClick = handleClick.bind(this)
	}

	/*shouldComponentUpdate(nextProps, nextState) {
		return this.state.isOpen !== nextState.isOpen
	}*/
	/*componentWillReceiveProps(nextProps) {
		if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}*/
	componentWillUpdate(){
		console.log('will update', );

	}

	/*Экспериментальное состояние*/
	/*state = {
		isOpen: true
	};*/

	render(){
		const {article, isOpen, onButtonClick} = this.props;
		let body = isOpen && <section className="card-text">{ article.text }</section>;

		return (
			<div className="card mx-auto" style={{width: '50%'}}>
				<div className="card-header">
					<h2 onClick={this.incrementCounter} >
						{article.title}
						clicked {this.state.count}
						<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
							{isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">
						Creation date: {(new Date(article.date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
		)
	}
	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
}

export default Article