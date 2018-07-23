import React, { Component } from 'react';

class HelloUser extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: 'zimman78'
		}

		this.handleChange = this.handleChange.bind(this)
	}
	handleChange (e) {
		this.setState({
			username: e.target.value
		})
	}
	render() {
		return (
			<div>
				Hello {this.state.username} <br />
				Change Name:
				<input type="text" value={this.state.username} onChange={this.handleChange} />
			</div>
		)
	}
}

export default HelloUser;