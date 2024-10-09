import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import gmailIcon from "../../../assets/gmail.png"
import "./style.css"

export default function ContactUs() {
    return (
        <div className="grid grid-rows-2 gap-y-3 h-14 w-36" id="contactusdiv">
            <div className="cold-start-1 row-start-1 text-lg">Contact Us</div>
            <div className="col-start-1 row-start-2 grid grid-cols-4 grid-rows-3 w-36 gap-x-4" id="socialmediagrid">
                <div className="col-start-1 row-start-3 grid grid-cols-1 grid-rows-1" id="emaillinkdiv">
                    <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="emaillink">
                        {/* <div className="m-auto">
                            <img src={gmailIcon} alt="gmail-icon" className="h-4 m-auto" />
                        </div> */}
                    </a>
                    <div className="col-start-1 row-start-1 z-0 grid h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="emailtextdiv">
                        <div className="rounded-md bg-white px-4 pt-1 pb-2 text-white font-semibold text-nowrap grid" id="emailtext">
                            <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="m-auto">meyliannymulyadi@yahoo.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 row-start-3 grid grid-cols-1 grid-rows-1" id="email2linkdiv">
                    <a href="mailto:meyliannymulyadi@yahoo.com" target="_blank" className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" id="email2link">
                        <div className="m-auto">
                            <img src={gmailIcon} alt="gmail-icon" className="h-4 m-auto" />
                        </div>
                    </a>
                    <div className="col-start-1 row-start-1 z-0 grid h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in" id="email2textdiv">
                        <div className="rounded-md px-4 pt-1 pb-2 text-black font-semibold text-nowrap grid" id="email2text">
                            <a href="mailto:juliangenesiusmuljadi.com" target="_blank" className="m-auto">juliangenesiusmuljadi@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 row-start-3 grid grid-cols-1 grid-rows-1" id="whatsapplinkdiv">
                    <div className="col-start-1 row-start-1 rounded-md size-7 m-auto grid peer z-20" id="whatsappicon">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} className="m-auto" id="whatsappiconimage" />
                    </div>
                    <div className="col-start-1 row-start-1 z-0 grid h-7 opacity-0 peer-hover:z-50 hover:z-50 peer-hover:animate-icon-fade-in hover:animate-icon-fade-in " id="whatsapptextdiv">
                        <div className="rounded-md pl-3 pr-4 pt-1 pb-2 text-white font-bold text-nowrap" id="whatsappphonenumber">+62 812 8904 9098</div>
                    </div>
                </div>
                <div className="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1" id="facebooklinkdiv">
                    <a href="https://www.facebook.com/idollajewelry/" target="_blank" id="facebooklink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-2 row-start-1 grid grid-cols-1 grid-rows-1" id="tiktoklinkdiv">
                    <a href="https://www.tiktok.com/@idollajewelry/" target="_blank" id="tiktoklink"
                    className="col-start-1 row-start-1 z-20 peer rounded-lg grid size-7" />
                </div>
                <div className="col-start-3 row-start-1 grid grid-cols-1 grid-rows-1" id="instagramlinkdiv">
                    <a href="https://www.instagram.com/idollajewelry/" target="_blank" id="instagramlink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-1 row-start-2 grid grid-cols-1 grid-rows-1" id="shopeediv">
                    <a href="https://shopee.co.id/idollajewelry?entryPoint=ShopBySearch&searchKeyword=idolla" target="_blank" id="shopeelink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-2 row-start-2 grid grid-cols-1 grid-rows-1" id="googlemapsdiv">
                    <a href="https://maps.app.goo.gl/TYdSyb6cf996btCy9?g_st=ic" target="_blank" id="googlemapslink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
                <div className="col-start-3 row-start-2 grid grid-cols-1 grid-rows-1" id="tokopediadiv">
                    <a href="https://tokopedia.link/idollajewelry" target="_blank" id="tokopedialink"
                    className="col-start-1 row-start-1 z-20 peer rounded-md grid size-7" />
                </div>
            </div>
            <div className="col-start-1 row-start-2 z-10 h-12 w-72 mt-16" id="coveringdiv"></div>
        </div>
    );
};