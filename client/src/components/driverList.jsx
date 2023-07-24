import { DriverItem } from "./driverItem"

export function DriverList({ drivers, deleteDriver, editDriver }) {
    
    return (
        <ul role="list" className="divide-y divide-gray-300 flex flex-col w-2/3">
            {drivers.length === 0 && "No drivers"}
            {drivers.map(p => {
                return (
                    <driverItem id={p._id} tba={p.tba} weight={p.weight} item={p.item} location={p.location} city={p.city} driverID={p.driverID} deleteDriver={deleteDriver} editDriver={editDriver} key={p._id}/>
                )
            })}
        </ul> 
    )
}