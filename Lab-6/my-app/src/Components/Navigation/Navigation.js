import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import About from "../About/About";
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Student from "../Student/Student";
import customHistory from "../History/History";
import Redirect from "../Redirect/Redirect";

const Navigation = (props) => {
    const handleRedirectClick = () => {
        const { history } = props;
        if(history)
            history.push("/");
        else
            console.log("history not found in props");
    
    }
    return (
        <BrowserRouter history={customHistory}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" style={{ color: "green" }}>Home</NavLink>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/student/Jim">Student: Jim Smith</Link>
                    </li>
                    <li>
                        <NavLink to="/student/Jane+Smith/50001" style={{ color: "green" }} >Student: Jane Smith, Student No: 50001</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redirect" style={{ color: "green" }} >Redirect</NavLink>
                    </li>
                </ul>
                <button onClick={handleRedirectClick}>Redirect</button>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/student/:studentname/:studentno" element={<Student />} />
                    {/* in v6 react-router-dom does not support optional params */}
                    <Route path="/student/:studentname" element={<Student />} />
                    <Route path="/redirect" element={<Redirect/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Navigation;