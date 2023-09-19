

export function DriverPackageList({ packages, list }) {

    return (
        <>
        <div></div>
        {list && (
            <ul className="flex flex-col w-2/3 self-center divide-y divide-gray-300">
            {packages.map(p => {
                return (
                    <div key={p._id} >
                        {list && (
                            <>
                            <li className="flex flex-col py-5">
                                <div className="flex justify-center">
                                    <p className="text-gray-900 px-5">TBA: {p.tba}</p>
                                    <p className="text-gray-900 px-5">Item: {p.item}</p>
                                    <p className="text-gray-900 px-5">Weight: {p.weight}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-gray-900 px-5">Location: {p.location}</p>
                                    <p className="text-gray-900 px-5">City: {p.city}</p>
                                </div>
                            </li>
                            </>
                        )}
                    </div>
                )
            })}
        </ul>
        )}
        
        </>
    )
}

