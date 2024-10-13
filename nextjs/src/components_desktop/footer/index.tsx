// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMobile from "@/components_mobile/footer";
import ContactUs from "./contactus";
import "./style.css";
import OtherServices from "./otherservices";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 flex sm:hidden"><FooterMobile /></div>
            <div className="col-start-1 row-start-1 hidden sm:grid">
                {/* <Image /> */}
            </div>
            <div className="col-start-1 row-start-1 hidden sm:grid sm:grid-cols-2 sm:grid-rows-1 h-[14rem] bg-gray-600"
                id="footerdiv">
                <div className="col-start-1 row-start-1 my-auto pr-16">
                    <OtherServices />
                </div>
                <div className="col-start-2 row-start-1 my-auto pl-16 border-l border-white">
                    <ContactUs />
                    {/* <IdollaGoogleMaps /> */}
                </div>
            </div>
        </div>
    );
};