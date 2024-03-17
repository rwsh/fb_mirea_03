import { useParams, useSearchParams } from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    let x = searchParams.get("x");
    let n = params.id;
    let xn = Math.pow(x, n)
   
    return (
        <div>
            <Nav/>
            Степень = {n}
            <br/>
            x = {x}
            <br/>
            x в степени = {xn}
        </div>
    )
}


