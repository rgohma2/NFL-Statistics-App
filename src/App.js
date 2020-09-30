import React from 'react';
import BetsContainer from './BetsContainer'
import LoginRegister from './LoginRegister'

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <BetsContainer/>
        <LoginRegister/>
      </div>
    );
  }
}

export default App;
