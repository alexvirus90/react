import React, {Component, PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../articles'
import 'bootstrap/dist/css/bootstrap.css'
// import articles from '../fixtures.js'

class App extends PureComponent {
	state = {
		reverted: false
	};

	render () {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">
						App name
						<button className="btn" onClick={this.revert}>Revert</button>
					</h1>
				</div>
				<ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
			</div>
		)
	}

	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default App
