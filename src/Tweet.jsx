import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Tweet extends Component {

	static propTypes: {
		className: PropTypes.String
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="tweet">
			{this.props.children}
			</div>
		)
	}
}