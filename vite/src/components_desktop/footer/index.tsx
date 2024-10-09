// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactUs from "./contactus";

export default function Footer() {
    return (
        <div className="bg-gray-600 h-96 text-white grid grid-cols-4 gap-10 *:border border-white">
            <div className="col-start-4">
                <ContactUs />
                {/* <IdollaGoogleMaps /> */}
            </div>
        </div>
    );
};