import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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
					<input
					label="Email Address"
					type="text"
					name="email"
					onChange={this.handleChange}
					value={this.state.email}
					/>
					<input
					label="Password"
					type="text"
					name="password"
					onChange={this.handleChange}
					value={this.state.password}
					/>
					<button>Submit</button>
				</form>
			</Router>
		)
	}
}

export default LoginRegister
