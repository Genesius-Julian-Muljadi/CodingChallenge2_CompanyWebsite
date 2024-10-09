import CompanyOverviewMobile from "./companyoverview";
import HeroMobile from "./hero";
import ProductsServicesMobile from "./productsservices";

export default function HomeMobile() {
    return (
        <div>
            <div className="flex flex-col gap-6">
                <HeroMobile />
                <CompanyOverviewMobile />
                <ProductsServicesMobile />
            </div>
        </div>
    );
};