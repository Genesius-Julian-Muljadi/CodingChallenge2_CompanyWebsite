import NavBar from "../navbar/index.tsx";
import Footer from "../footer/index.tsx";
import HeroSection from "./hero/index.tsx";
import CompanyOverview from "./companyoverview/index.tsx";
import ProductsServices from "./productsservices/index.tsx";

export default function Home() {
    return (
        <div>
            <div><NavBar /></div>
            <div className="grid grid-cols-5 grid-rows-1">
                <div className="col-start-1 row-start-1 col-end-4"><HeroSection /></div>
                <div className="col-start-4 row-start-1 col-end-5"><CompanyOverview /></div>
            </div>
            <div><ProductsServices /></div>
            <div><Footer /></div>
        </div>
    );
};