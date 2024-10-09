import { Link } from "react-router-dom";
import "./style.css"

export default function NavBar() {
    return (
        <div className="grid grid-cols-12 sticky rounded-b-sm shadow-md shadow-red-950 text-white" id="navbarcontainer">
            <div className="col-start-1 col-end-5 flex flex-row gap-4 h-12 text-left">
                {/* <div className="col-start-1 row-start-1 col-end-3"> */}
                <Link to="/" className="ml-5" id="idollalogo" />
                <div className="my-auto ml-6" id="aboutustitle">
                    <Link to="/about-us">About Us</Link>
                </div>
                <div className="my-auto ml-6" id="ourteamtitle">
                    <Link to="/our-team">Our Team</Link>
                </div>
            </div>
            <div className="col-start-6 col-end-8 my-auto text-center" id="cataloguetitle">
                <Link to="/catalogue">Catalogue</Link>
            </div>
            <div className="col-start-9 col-end-13 grid grid-rows-2" id="id/entitle">
                <div className="col-start-1 row-start-1 m-auto">(flag) ID</div>
                <div className="col-start-1 row-start-2 m-auto">(flag) EN</div>
            </div>
        </div>
    );
};