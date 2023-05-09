import {Link} from "react-router-dom";


const Navbar = () =>{
    return (
        <>
        <div>Logo</div>
    <div>Navbar
    <Link to="/">Login</Link>
    <Link to="/signup">SignUp</Link>
    <Link to="/dashboard">dashBoard</Link>
    <Link to="/conversations">conversations</Link>
    <Link to="/browse">browse</Link>
    </div>

    </>
    )
}

export default Navbar;