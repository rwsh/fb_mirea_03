import { NavLink } from "react-router-dom";

export default function Nav() {
    const setActive = ({isActive}) => ({fontWeight: isActive? 'bold': 'normal'});
    return (
        <div>
            |<NavLink to="/2/?x=5" style={setActive}>Квадрат</NavLink>|  
            <NavLink to="/3/?x=6" style={setActive}>Куб</NavLink>|
        </div>
    )
}

