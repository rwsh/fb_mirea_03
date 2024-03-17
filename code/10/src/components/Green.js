import { Link } from "react-router-dom"

export default function Green() {
    const styles = {
        width: "100px",
        height: "100px",
        background: "green",
    }

    return (
        <div>
            <div style={styles}></div>
            <Link to="/">Еще раз!</Link>
        </div>
        
    )
}

