import "./index.css"
import {Link} from "react-router-dom";

function Header(){
    return <>
        <div className="container">
            <Link to="/">
                HomePage
            </Link>
            <Link to="Favorites">
                Favorites Page
            </Link>
        </div>
    </>
}
export default Header;