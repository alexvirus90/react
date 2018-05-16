import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList';

class Article extends Component{
	static propTypes = {
		article: PropTypes.object.isRequired
	}

	constructor(props){
		super(props);

		this.state = {
			isOpen: true
		}
	}
	render() {
		const {article} = this.props;
		const {isOpen} = this.state;

		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick = {this.toggleOpen}>
					{isOpen ? 'Close' : 'Open'}
				</button>
				{this.getBody()}
				{this.showComments()}
			</div>
		)
	}
	getBody = () =>{
		if (!this.state.isOpen) return null;
		const {article} = this.props;
		return <section>{article.text}</section>
	};

	showComments(){
		if(!this.state.isOpen) return null;
		const {article} = this.props;
		return <CommentList comments = {article.comments} />
	}

	toggleOpen = (ev) => {
		ev.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
}

export default Article