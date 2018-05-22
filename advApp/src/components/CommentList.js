import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

	static defaultProps = {
		comments: []
	}

	render(){
		const text = this.props.isOpen ? 'hide comments' : 'show comments'
		return (
			<div>
				<button onClick={this.props.toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)
	}

	getBody(){
		const {comments, isOpen} = this.props;
		if(!isOpen) return null;
		if(!comments.length) return <p> No comments yet</p>

		return(
			<ul>
				{comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
			</ul>
		);
	}

	/*render(){
		const commentElements = comments.map((comment,index) =>

			<li data = {index} key = {comment.id}>
				<Comment comment = {comment} />
			</li>);
		return(
			<ul>
				{this.showComments(commentElements)}
			</ul>
		);
	}

	showComments(commentElements){
		return(
			<div>
				{commentElements.length > 0 &&
				<button onClick = {this.props.toggleOpen}>
					{this.props.isOpen ? 'show comments' : 'hide comments'}
				</button>
				}
				{this.props.isOpen ? commentElements : null}
			</div>
		);
	}*/

}

export default toggleOpen(CommentList)