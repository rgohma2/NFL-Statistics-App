import React from 'react';
import BetsContainer from './BetsContainer'
import LoginRegister from './LoginRegister'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}


class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      loggedIn: false
    }

  }



  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props

    return (
      <div>
        <h1>Safe Bets App</h1>
        {
        this.state.loggedIn === true 
        ?
        <BetsContainer/>
        :
        <LoginRegister
        user={this.user}
        signOut={this.signOut}
        signInWithGoogle={this.signInWithGoogle}
        />
        }
        <button onClick={signInWithGoogle}>Sign in with Google!</button>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
