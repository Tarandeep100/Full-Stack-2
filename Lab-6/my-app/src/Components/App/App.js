import React,{Component} from 'react';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Navigation/>
    );
  }
}

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};



export default App;
