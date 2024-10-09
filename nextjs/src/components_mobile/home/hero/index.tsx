import "./style.css";

export default function HeroMobile() {
    return (
        <div className="mt-2">
            <div className="flex flex-col gap-2">
                <div className="m-auto">
                    <span className="text-xl" id="homesloganmobile">FOR THOSE WHO DARE TO SHINE BRIGHT</span>
                </div>
                <div className="rounded-3xl mx-auto" id="homeherocontainermobile"></div>
            </div>
        </div>
    );
};