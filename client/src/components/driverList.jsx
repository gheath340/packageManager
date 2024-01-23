import { DriverItem } from "./driverItem";

export function DriverList({
  drivers,
  deleteDriver,
  editDriver,
  toggleOpenDriverItems,
  openDriverItems,
}) {
  return (
    <ul className="divide-y divide-gray-300 flex flex-col w-2/3">
      {drivers.length === 0 && "No drivers"}
      {drivers.map((d) => {
        return (
          <DriverItem
            id={d._id}
            driverID={d.driverID}
            packages={d.packages}
            active={d.active}
            lastStop={d.lastStop}
            nextStop={d.nextStop}
            city={d.city}
            deleteDriver={deleteDriver}
            editDriver={editDriver}
            key={d._id}
            toggleOpenDriverItems={toggleOpenDriverItems}
            openDriverItems={openDriverItems}
            drivers={drivers}
          />
        );
      })}
    </ul>
  );
}
