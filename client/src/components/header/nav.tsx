import { NavLink } from "react-router-dom";

const Nav = () => <nav className = "header__navbar">
    <ul className = "navbar__list">
        <li className = "navbar__item"><NavLink to = "/">Home</NavLink></li>
        <li className = "navbar__item"><NavLink to = "/misdemeanours">Misdemeanours</NavLink>
            <ul>
                <li><NavLink to = "/misdemeanours/mild_public_rudeness">
                    Mild Public Rudeness</NavLink></li>
                <li><NavLink to = "/misdemeanours/speaking_in_a_lift">
                    Speaking In A Lift</NavLink></li>
                <li><NavLink to = "/misdemeanours/not_eating_your_vegetables">
                    Not Eating Your Vegetables</NavLink></li>
                    <li><NavLink to = "/misdemeanours/supporting_manchester_united">
                    Supporting Manchester United</NavLink></li>
            </ul>
        </li>
        <li className = "navbar__item"><NavLink to = "/confession">Confess To Us</NavLink></li>
    </ul>
</nav>;

export default Nav;