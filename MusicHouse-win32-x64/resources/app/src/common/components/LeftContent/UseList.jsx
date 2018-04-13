import React, {Component} from 'react';

export default class UseList extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{
				width: '92%',
				height: 28,
				margin: '0 auto 8px',
				position: 'relative',
				display: 'inline-block',
				background: '#9f8bff',
				boxShadow: '2px 2px 8px #555',
				borderRadius: 14,
				lineHeight: 0,
				cursor: 'pointer'
			}}>
				<img src={require('../../images/touxiang.jpg')} style={{
					width: 20,
					height: 20,
					top: '50%',
					left: 4,
					position: 'absolute',
					float: 'left',
					transform: 'translate(0, -50%)',
					display: 'inline-block',
					background: '#555',
					borderRadius: '50%',
					boxShadow: '0 0 2px #555'
				}} />
				<p style={{
					marginLeft: 28,
					textAlign: 'left',
					lineHeight: 0
				}}>JesBrian</p>
			</div>
		)
	}
}