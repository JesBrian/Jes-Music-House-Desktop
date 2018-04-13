import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'

import Avatar from './Avatar.jsx'
import Message from './Message.jsx'
import Send from './Send.jsx'

export default class RightContent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const RightContentStyle = {
			width: '100%',
			height: '100%',
			padding: '48px 3px 148px 148px',
			boxSizing: 'border-box'
		}

		return (
			<div style={RightContentStyle}>
				<Avatar />
				<Message />
				<Send />
			</div>
		);
	}
}