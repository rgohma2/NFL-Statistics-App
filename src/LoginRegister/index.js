import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
// const db = firebaseApp.firestore()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class LoginRegister extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			email: '',
			password:'',
			name:''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSignUp = (event) => {
		event.preventDefault()
		// console.log(this.state)
		firebaseAppAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then(response => {
			console.log(response)
			const user = response.user
			user.updateProfile({
  				displayName: this.state.name
 			})
		})
	}

	clearForm = () => {
		this.setState({
			email: '',
			password:'',
			name:''
		})
	}

	render() {
		const {
	      user,
	      signOut,
	      signInWithGoogle,
	    } = this.props
		return(
			<Router>
				<div>
				{
					user
					?
					<div>
						<p>Hello,

						{
							user.displayName
							?
							user.displayName
							:
							this.state.name
						}
						</p>
						<button onClick={signOut}>Sign Out</button>
					</div>
					:
					<div>
						<form onSubmit={this.handleSignUp}>
						<h1>Sign Up</h1>
						<div className='input'>
							Name: <input
							label="Name"
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name}
							/>
						</div>
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
						<button onClick={signInWithGoogle}>Sign in with Google!</button>
					</div>
				}
				</div>

			</Router>
		)
	}
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginRegister)
