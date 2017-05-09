import ReactDOM from 'react-dom'
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
require('./stylesheets/react-tweet-timeline.css');

export default class Timeline extends Component {

	constructor(props) {
		super(props);
		this.state = { user: '', tweets : [1,2,3,4,5]};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.currentTarget.value, tweets : [4,5,6,7,8,0]})
		console.log(this);
	}

	eachTweet(tweet, i) {
		return (
			<Tweet key = {i}>
			{tweet}
			</Tweet>
		)
	}

	render() {
		return (
			<div className="timeline">
			<input type="text" className="user" onChange={this.handleChange} placeholder="Type the username" />
			{this.state.tweets.map(this.eachTweet)}
			</div>
		);
	}
}