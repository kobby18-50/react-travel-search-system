import { useState } from "react";
import { NavLink } from "react-router-dom";
import MountainList from "./TourList/MountainList";
import WaterFallList from "./TourList/WaterfallList";
import IceBergList from "./TourList/IceBergList";
import BeachList from "./TourList/BeachList";

const Explore = ({ title }) => {
  const [filter, setFilter] = useState("beach");

  const activeNav = "text-warning";
  return (
    <div>
      <div className="ml-4 mt-10 grid lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <h1 className="text-3xl font-medium">{title}</h1>
        </div>

        <div>
          <ul className="flex space-x-4">
            <NavLink onClick={() => setFilter("beach")} className={`cursor-pointer ${filter === "beach" ? activeNav : ""}`}>
              Beach
            </NavLink>
            <NavLink
              onClick={() => setFilter("mountain")}
              className={`cursor-pointer ${filter === "mountain" ? activeNav : ""}`}
            >
              Mountain
            </NavLink>
            <NavLink
              onClick={() => setFilter("waterfall")}
              className={`cursor-pointer ${filter === "waterfall" ? activeNav : ""}`}
            >
              Waterfall
            </NavLink>
            <NavLink onClick={() => setFilter("iceberg")}
            className={`cursor-pointer ${filter === "iceberg" ? activeNav : ""}`}>
              Iceberg
            </NavLink>
            <NavLink to={'/total-list'}>
              View all
            </NavLink>
          </ul>
        </div>
      </div>

      {filter === "beach" && (
        <BeachList className="text-warning" />
      )}
      {filter === "mountain" && <MountainList />}
      {filter === "waterfall" && <WaterFallList  />}
      {filter === "iceberg" && <IceBergList  />}
      {filter === "all" && (
        <>
          <BeachList  />
          <IceBergList />
        </>
      )}
    </div>
  );
};

export default Explore;
