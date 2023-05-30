import { PackagePage } from "../pages/packagePage"
import { PackageItem } from "./packageItem"

export function PackageList({ packages, deletePackage, editPackage }) {
    
    return (
        <ul className="flex flex-col gap-y-4 overflow-y-auto">
            {packages.length === 0 && "No Packages"}
            {packages.map(p => {
                return (
                    <PackageItem id={p._id} tba={p.tba} weight={p.weight} item={p.item} location={p.location} city={p.city} driverID={p.driverID} deletePackage={deletePackage} editPackage={editPackage} key={p._id}/>
                )
            })}
        </ul>
    )
}