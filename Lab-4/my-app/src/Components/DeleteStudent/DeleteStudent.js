import axios from "axios";
import React from "react";

class DeleteStudent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
      event.preventDefault();
      axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then(res=>{
          console.log(res);
      });
      
      this.props.deleteStudent(this.props.id);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default DeleteStudent;
