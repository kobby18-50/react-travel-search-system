import { useState } from "react";
import { Link } from "react-router-dom";
import MountainList from "./TourList/MountainList";
import WaterFallList from "./TourList/WaterfallList"
import IceBergList from "./TourList/IceBergList";
import BeachList from "./TourList/BeachList";


const Explore = ({beaches, mountains, icebergs, waterfalls, title}) => {
    const [filter, setFilter] = useState('beach');
    return ( 
        <div>
            <div className="ml-4 mt-10 grid lg:grid-cols-2 sm:grid-cols-1">
                <div>
                    <h1 className="text-3xl font-medium">{title}</h1>
                </div>

                <div>
                    <ul className="flex space-x-4">
                        <li onClick={() => setFilter('beach')} className = "cursor-pointer">Beach</li>
                        <li onClick={() => setFilter('mountain')} className = "cursor-pointer">Mountain</li>
                        <li onClick={() => setFilter('waterfall')} className = "cursor-pointer">Waterfall</li>
                        <li onClick={() => setFilter('iceberg')} className = "cursor-pointer">Iceberg</li>
                        <li className="text-warning"><Link to={'/total-list'}>View all</Link></li>
                    </ul>
                </div>
            </div>

           
            {filter === 'beach' && (<BeachList beaches = {beaches} className="text-warning"/>) }
            {filter === 'mountain' && (<MountainList mountains = {mountains}/>) }
            {filter === 'waterfall' && (<WaterFallList waterfalls = {waterfalls}/>) }
            {filter === 'iceberg' && (<IceBergList icebergs = {icebergs}/>) }
        </div>
     );
}
 
export default Explore;