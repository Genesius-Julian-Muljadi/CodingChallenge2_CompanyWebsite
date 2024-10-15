import Storefront from "../../../assets/IMG_8370.jpeg";
import Image from "next/image";

export default function CompanyHistory() {
    return (
        <div>
            <div className="grid grid-cols-9 grid-rows-1 gap-2 mx-auto h-[35rem] w-[86rem]">
                <div className="col-start-1 col-end-6 row-start-1">
                    {/* <img src="../../../assets/IMG_8370.jpeg" className="h-[100%] w-[100%]"></img> */}
                    <Image src={Storefront} alt='storefrontimg' className="h-[100%] w-[100%] rounded-md shadow-sm shadow-slate-700" />
                </div>
                <div className="col-start-6 col-end-10 row-start-1 p-4 my-auto text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    );
};