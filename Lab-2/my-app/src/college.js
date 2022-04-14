import React from 'react';

class College extends React.Component {
    render() { 
        return <p> College <b>{this.props.name}</b> name with address <b>{this.props.location}</b></p>;
    }
}
 
export default College;