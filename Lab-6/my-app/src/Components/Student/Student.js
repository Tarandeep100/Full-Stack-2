import { useParams } from "react-router-dom";

const Student = ({match}) => {
    // console.log(match.params);
    let params = useParams();
    const { studentname } = params;
    const { studentno } = params;
    return (
      <div>
        <p>Student</p>
        <div>
            <div>{`The student name is "${studentname}"!`}</div>
            {studentno ? <div> {`The student no is ${studentno}`}</div> : null}
        </div>
      </div>
    )
}

export default Student;