import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './index.css'

class LoginRegister extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			email: '',
			password:''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return(
			<Router>
				<form>
				<h1>Login</h1>
					<div className='input'>
						Email Address: <input
						label="Email Address"
						type="text"
						name="email"
						onChange={this.handleChange}
						value={this.state.email}
						/>
					</div>
					<div className='input'>
						Password: <input
						label="Password"
						type="text"
						name="password"
						onChange={this.handleChange}
						value={this.state.password}
						/>
					</div>
					<button>Submit</button>
				</form>
					{this.props.user}

					<button onClick={this.props.signInWithGoogle}>Sign in with Google!</button>
			</Router>
		)
	}
}

export default LoginRegister
