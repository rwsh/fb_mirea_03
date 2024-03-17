import { Link } from "react-router-dom";

export default function AboutNav() {
    return (
        <div>
            <ol>
                <li><Link to="/about/managment">Руководство</Link></li>
                <li><Link to="/about/contact">Контакты</Link></li>
            </ol>
        </div>
    )
}

