import { NavLink } from "react-router-dom";

export default function Nav() {
    const setActive = ({isActive}) => ({fontWeight: isActive? 'bold': 'normal'});
    return (
        <div>
            | <NavLink to="/" style={setActive}>Home</NavLink> 
            | <NavLink to="/about" style={setActive}>О компании</NavLink> |
        </div>
    )
}

