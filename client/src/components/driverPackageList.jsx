

export function DriverPackageList({ packages, list }) {

    return (
        <>
        <div></div>
        {list && (
            <ul className="flex flex-col self-center divide-y divide-gray-300">
            {packages.map(p => {
                return (
                    <div key={p._id} >
                        {list && (
                            <li className="flex flex-col py-5">
                                <div className="flex justify-center flex-wrap divide-x divide-gray-500">
                                    <p className="text-gray-900 px-1">TBA: {p.tba}</p>
                                    <p className="text-gray-900 px-1">Item: {p.item}</p>
                                    <p className="text-gray-900 px-1">Weight: {p.weight}</p>
                                    <p className="text-gray-900 px-1">Location: {p.location}</p>
                                    <p className="text-gray-900 px-1">City: {p.city}</p>
                                </div>
                            </li>
                        )}
                    </div>
                )
            })}
        </ul>
        )}
        
        </>
    )
}

