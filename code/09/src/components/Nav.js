import { NavLink } from "react-router-dom";

export default function Nav() {
    const setActive = ({isActive}) => ({fontWeight: isActive? 'bold': 'normal'});
    return (
        <div>
            |<NavLink to="/" style={setActive}>Home</NavLink>|  
            <NavLink to="/new" style={setActive}>Новая ссылка</NavLink>|
            <NavLink to="/old" style={setActive}>Старая ссылка</NavLink>|
        </div>
    )
}

