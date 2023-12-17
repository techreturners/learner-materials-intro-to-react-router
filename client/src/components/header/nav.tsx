import { NavLink } from "react-router-dom";

const Nav = () => <nav>
    <ul>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/misdemeanours">Misdemeanours</NavLink>
            <ul>
            <li><NavLink to = "/misdemeanours/mild_public_rudeness">Mild Public Rudeness</NavLink></li>
            </ul>
        </li>
        <li><NavLink to = "/confession">Confess To Us</NavLink></li>
    </ul>
</nav>;

export default Nav;