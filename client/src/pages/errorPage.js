import { Link } from "react-router-dom";


export default function ErrorPage(){

    return(
        <>
            <h1>Error: Page does not exist.</h1>
            <Link to="/">Login</Link>
        </>
    )
}