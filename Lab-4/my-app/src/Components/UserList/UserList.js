import axios from "axios";
import React from "react";
import AddStudent from "../AddStudent/AddStudent";
import DeleteStudent from "../DeleteStudent/DeleteStudent";

class UserList extends React.Component {
    state = { 
        users: []
     } 
    async componentDidMount(){
        await this.getUsers();
    }

    addNewStudent = (data) => {
        console.log(data);
        let res = {
          name: data.user.name,
          id: data.user.id,
        };
        this.setState({
          users: [...this.state.users, res],
        });
    };

    getUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data;
            // console.log(users);
            this.setState({users});
        })
    }

    deleteStudent = (data) => {
        console.log(data);
        const user = this.state.users.filter((res) => res.id !== data);
        this.setState({
          users: user,
        });
      };


    render() { 
        return (
            <>
                
                <AddStudent addNewStudent={this.addNewStudent}/>
                <ul>
                    {this.state.users.map(user =>(
                        <li>
                            {user.name}
                            <DeleteStudent key="user.id" id={user.id} deleteStudent={this.deleteStudent} />
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
 
export default UserList;