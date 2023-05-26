import { PackagePage } from "../pages/packagePage"
import { PackageItem } from "./packageItem"

export function PackageList({ packages, deletePackage }) {
    
    return (
        <ul>
            {packages.length === 0 && "No Packages"}
            {packages.map(p => {
                return (
                    <PackageItem id={p._id} tba={p.tba} weight={p.weight} items={p.items} location={p.location} city={p.city} driverID={p.driverID}/>
                )
            })}
        </ul>
    )
}