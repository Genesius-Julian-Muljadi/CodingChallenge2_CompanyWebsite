import Image from "next/image";
import Culture from "../../../assets/indonesiaflag.png";

export default function CompanyCultureMobile() {
    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto w-[90vw]">
                <div className="">
                    <Image src={Culture} alt='cultureimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                </div>
                <div className="p-4 mx-auto text-xl">
                    Obligatory company culture section text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
};