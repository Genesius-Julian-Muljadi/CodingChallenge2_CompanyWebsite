import ContactUsMobile from "./contactus";

export default function FooterMobile() {
    return (
        <div>
            <div className="bg-gray-600 h-36 w-screen">
                <div className="grid grid-cols-9 grid-rows-1 gap-2">
                    <div className="col-start-6 col-end-10 row-start-1">
                        <ContactUsMobile />
                    </div>
                </div>
            </div>
        </div>
    );
};