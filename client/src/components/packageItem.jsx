
export function PackageItem({ id, tba, weight, items, location, city, driverID }) {
    
    return (
        <li className="flex">
            <div id="tba">{tba}</div>
            <div id="weight">{weight}</div>
            <div id="items">{items}</div>
            <div id="location">{location}</div>
            <div id="city">{city}</div>
            <div id="driverID">{driverID}</div>
        </li>

    )
}