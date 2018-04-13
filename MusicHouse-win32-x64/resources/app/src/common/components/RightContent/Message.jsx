import React, {Component} from 'react';

import MessageCell from './MessageCell.jsx'

export default class Message extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const MessageContentStyle = {
			width: '100%',
			height: '100%',
			boxSizing: 'border-box',
			overflow: 'auto',
			textAlign: 'left'
		}
		return (
			<div style={MessageContentStyle}>
				666
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				<MessageCell />
				666
			</div>
		)
	}
}