
export function PackageItem({ id, tba, weight, item, location, city, driverID }) {
    
    return (
        <>
        <li className="flex justify-center gap-x-6 items-center flex-wrap">
            <div id="tba" className="">{tba}</div>
            <div>
                <div id="weight" className="border">Weight: {weight}</div>
                <div id="items" className="border">Item: {item}</div>
                <div id="location" className="border">Location: {location}</div>
                <div id="city" className="border">City: {city}</div>
                <div id="driverID" className="border">Driver: {driverID}</div>
            </div>
        </li>
        </>

    )
}