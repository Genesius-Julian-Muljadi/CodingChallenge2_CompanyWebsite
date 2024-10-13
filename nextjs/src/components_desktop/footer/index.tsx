// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMobile from "@/components_mobile/footer";
import ContactUs from "./contactus";
import "./style.css";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 flex sm:hidden"><FooterMobile /></div>
            <div className="col-start-1 row-start-1 hidden sm:grid sm:grid-cols-9 sm:gap-10 h-[14rem] bg-gray-600"
                id="footerdiv">
                <div className="col-start-6 col-end-10 row-start-1 my-auto">
                    <ContactUs />
                    {/* <IdollaGoogleMaps /> */}
                </div>
            </div>
        </div>
    );
};