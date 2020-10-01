import React from 'react';
import BetsContainer from './BetsContainer'
import LoginRegister from './LoginRegister'



class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      loggedIn: false
    }

  }



  render() {

    return (
      <div>
        <h1>Safe Bets App</h1>
        {
        this.state.loggedIn === true 
        ?
        <BetsContainer/>
        :
        <LoginRegister
        />
        }
      </div>
    );
  }
}

export default App
