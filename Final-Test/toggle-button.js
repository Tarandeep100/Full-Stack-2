class ToggleButton extends React.Component {

  constructor(props) { 
    super(props); 
    this.state = { toggle: false }; 
  } 
 
  render() { 
      return React.createElement(
          'button',
          { onClick: () => this.setState({ toggle: !this.state.toggle})},
          this.state.toggle ? 'ON':'OFF'
      )
  } 
}
const doc = document.querySelector('#button-container'); 

ReactDOM.render(React.createElement(ToggleButton), doc); 