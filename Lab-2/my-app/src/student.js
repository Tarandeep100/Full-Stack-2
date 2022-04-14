import React from 'react';
import Courses from './courses';

const Student = (props) => {
    const enroll = props.enrolled;
    let container = [];
    for(let i = 0; i < enroll; i++){
        container.push(
            <Courses key={i} enrolled={i}/>
        )
    }
    return(
        <React.Fragment>
            <p> 
                Student <b>{props.name}</b> name with student number <b>{props.number}</b>
                {container}
            </p>;
        </React.Fragment>
    )
};

export default Student;