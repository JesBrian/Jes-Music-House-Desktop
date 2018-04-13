import React, {Component} from 'react';

export default class Send extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMessage: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			editMessage: event.target.value
		});
	}
	handleSubmit(event) {
		console.log(this.state.editMessage);
		event.preventDefault();
	}

	render() {
		const SendContentStyle = {
			width: '100%',
			right: 0,
			bottom: 0,
			position: 'fixed',
			boxShadow: '0 0 3px #555'
		}

		return (
			<form onSubmit={this.handleSubmit} style={SendContentStyle}>
				<div style={{
					width: '100%',
					height: 32,
					boxShadow: '0 0 3px #555'
				}}>
					<input type="submit" value="发送" style={{
						width: 88,
						height: '100%',
						float: 'right'
					}} />
				</div>
				<textarea style={{
					width: '100%',
					height: 108,
					padding: '3px 3px 3px 143px',
					resize: 'none',
					border: 'none',
					boxSizing: 'border-box',
					fontSize: 17,
					letterSpacing: 0.38
				}} onChange={this.handleChange} value={this.state.editMessage} placeholder={'请输入要发送的信息 ...'} />
			</form>
		)
	}
}