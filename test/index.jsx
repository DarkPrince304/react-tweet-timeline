
import React from 'react'
import ReactDOM from 'react-dom'
import Timeline from '../src/Timeline.jsx'

export default class Component extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<Timeline>
			<div>This is a tweet</div>
			</Timeline>
		);
	}
}

ReactDOM.render(<Component/>, document.getElementById("containerOne"));
ReactDOM.render(<Component/>, document.getElementById("containerTwo"));