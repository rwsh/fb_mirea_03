import { Link } from "react-router-dom"

export default function Red() {
    const styles = {
        width: "100px",
        height: "100px",
        background: "red",
    }

    return (
        <div>
            <div style={styles}></div>
            <Link to="/">Еще раз!</Link>
        </div>
    )
}

