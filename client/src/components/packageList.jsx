import { PackageItem } from "./packageItem";

export function PackageList({ packages, deletePackage, editPackage, cities }) {
  return (
    <ul className="divide-y divide-gray-300 flex flex-col w-2/3">
      {packages.length === 0 && "No Packages"}
      {packages.map((p) => {
        return (
          <PackageItem
            id={p._id}
            tba={p.tba}
            weight={p.weight}
            item={p.item}
            location={p.location}
            city={p.city}
            driverID={p.driverID}
            deletePackage={deletePackage}
            editPackage={editPackage}
            key={p._id}
            cities={cities}
            packages={packages}
          />
        );
      })}
    </ul>
  );
}
