export default function Owners() {
    return (
        <div>
            <div className="grid grid-cols-1 grid-rows-2">
                <div className="col-start-1 row-start-1 grid">
                    <span className="m-auto">Owners</span>
                </div>
                <div className="col-start-1 row-start-2 grid grid-cols-2 grid-rows-1 *:border *:border-green-500">
                    <div className="col-start-1 row-start-1">
                        Hery Mulyadi
                    </div>
                    <div className="col-start-2 row-start-1">
                        Meylianny Mulyadi
                    </div>
                </div>
            </div>
        </div>
    );
};