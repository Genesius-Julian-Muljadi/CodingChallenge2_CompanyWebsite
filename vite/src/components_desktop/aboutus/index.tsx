import NavBar from "../navbar/index.tsx";
import Footer from "../footer/index.tsx";
import CompanyHistory from "./companyhistory/index.tsx";

export default function AboutUs() {
    return (
        <div>
            <div><NavBar /></div>
            <div><CompanyHistory /></div>
            <div><Footer /></div>
        </div>
    );
};