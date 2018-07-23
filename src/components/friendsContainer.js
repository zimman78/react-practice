import React, { Component } from 'react';
import ShowList from './showList'
import AddFriend from './addFriend'

class FriendsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Kyle Zimmerman',
			friends: [
			'Mike Lucas',
			'Mark Novak',
			'Johnny Maiden'
			]
		}

		this.addFriend = this.addFriend.bind(this)
	}
	addFriend(friend) {
		this.setState((state) => ({
			friends: state.friends.concat([friend])
		}))
	}
	render() {
		return (
			<div>
				<h3> Name: {this.state.name} </h3>
				<AddFriend addNew={this.addFriend} />
				<ShowList names={this.state.friends} />
			</div>
		)
	}
}

export default FriendsContainer;