import { Arrow } from "../components/arrow"

export function DriverPackageList({ packages, list, toggleOpenDriverItems, driverID, toggleList, openDriverItems }) {

    return (
        <ul className="divide-y divide-gray-300 flex flex-col w-2/3">
            {packages.map(p => {
                return (
                    <>
                        <button onClick={() => { toggleOpenDriverItems(driverID); toggleList() }}
                                                                         className="self-center">
                            <Arrow className={`${openDriverItems.includes(driverID) ? "-rotate-180" : ""} 
                                    w-6 h-6 text-gray-500 self-center transition`} />
                        </button>
                        {list && (
                            <h1>Package List</h1>
                        )}
                    </>
                )
            })}
        </ul> 
    )
}
//when arrow is pointing down show nothing
//when you click arrow package list shows up
//NEED DRIVERS PACKAGE LIST
{/* <li key={p._id} className="flex justify-between gap-x-6 py-5">
<div className="min-w-0 flex-auto items-start">
<p className="text-md font-semibold leading-6 text-gray-900">{p.tba}</p>
<p className="mt-1 truncate text-sm leading-5 text-gray-500">{p.item}</p>
<p className="mt-1 truncate text-sm leading-5 text-gray-500">{p.weight}</p>
</div>
<div className="flex-auto">
<p className="text-md leading-6 text-gray-900">{p.location}</p>
<div className="mt-1 items-end gap-x-1.5">
    <p className="text-sm leading-5 text-gray-500">{p.city}</p>
    <p className="text-sm leading-5 text-gray-500">{p.driverID}</p>
</div>

</div>
</li> */}