// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMobile from "@/components_mobile/footer";
import ContactUs from "./contactus";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="col-start-1 row-start-1 flex sm:hidden"><FooterMobile /></div>
            <div className="col-start-1 row-start-1 hidden sm:grid sm:grid-cols-4 sm:gap-10 bg-gray-600 h-96 text-white *:border border-white">
                <div className="col-start-4">
                    <ContactUs />
                    {/* <IdollaGoogleMaps /> */}
                </div>
            </div>
        </div>
    );
};