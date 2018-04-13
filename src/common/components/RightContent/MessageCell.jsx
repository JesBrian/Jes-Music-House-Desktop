import React, {Component} from 'react';

export default class MessageCell extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{
				width: '99%',
				height: 68,
				margin: 'auto',
				display: 'inline-block',
				background: '#555'
			}}></div>
		)
	}
}