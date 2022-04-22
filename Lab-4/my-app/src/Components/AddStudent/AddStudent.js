import axios from "axios";
import React from "react";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      axios.post("https://jsonplaceholder.typicode.com/users", {user: this.state})
      .then(res=>{
          console.log(res.data);
          this.props.addNewStudent(res.data);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
