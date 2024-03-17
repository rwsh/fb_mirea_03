import { Navigate } from "react-router-dom";

export default function Home() {
    if (Date.now() % 2 === 0){
        return <Navigate to="/green" />
    } else {
        return <Navigate to="/red" />
    }
    
}


