export default function Staff() {
    return (
        <div>
            <div className="grid grid-cols-1 grid-rows-2">
                <div className="col-start-1 row-start-1 grid">
                    <span className="m-auto">Staff</span>
                </div>
                <div className="col-start-1 row-start-2 grid grid-cols-3 grid-rows-1 *:border *:border-indigo-600">
                    <div>
                        Staff1
                    </div>
                    <div>
                        Staff2
                    </div>
                    <div>
                        Staff3
                    </div>
                </div>
            </div>
        </div>
    )
}