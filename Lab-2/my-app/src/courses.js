import React from 'react';

const Courses = (props) => {
    return ( 
        <React.Fragment>
            <p>Student is enrolled in <b>Course {props.enrolled}</b></p>
        </React.Fragment>
     );
}
 
export default Courses;