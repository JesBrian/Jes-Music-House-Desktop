import React, {Component} from 'react';

export default class Avatar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const AvatarContentStyle = {
			width: '100%',
			height: 42,
			top: 0,
			right: 0,
			position: 'absolute',
			// background: 'lightblue',
			boxShadow: '0 0 3px #555'
		}
		return (
			<div style={AvatarContentStyle}>
				<img src={require('../../images/touxiang.jpg')} style={{
					width: 32,
					height: 32,
					top: '50%',
					left: '50%',
					marginLeft: 48,
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
					display: 'inline-block',
					background: '#555',
					borderRadius: '50%',
					boxShadow: '0 0 2px #333'
				}} />
				<p style={{
					marginLeft: 176,
					lineHeight: 1
				}}>6666</p>
			</div>
		)
	}
}