import NavBar from "./NavBar";
import { GiAirplaneDeparture } from "react-icons/gi";
import BeachList from "./TourList/BeachList";
import { Link } from "react-router-dom";
import IceBergList from "./TourList/IceBergList";
import Footer from "./Footer";
import { TbWorldUpload } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { FaHotel } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { useState } from "react";
import MountainList from "./TourList/MountainList";
import WaterFallList from "./TourList/WaterfallList"

const Home = () => {
    const [filter, setFilter] = useState('beach');
    const beaches = [
        {
            id : 1,
            name : 'Kumasi',
            title : 'Kobby Beach',
            picture : '../images/travel.jpg'
        },

        {
            id : 2,
            title : 'Kobby Beach',
            name : 'Accra',
            picture : '../images/travel.jpg'
        },

        {
            id : 3,
            title : 'Kobby Beach',
            name : 'Accra',
            picture : '../images/travel.jpg'
        },

    ]

    const icebergs = [
        {
            id : 1,
            name : 'Kumasi',
            title : 'Kobby Iceberg',
            picture : '../images/travel.jpg'
        },

        {
            id : 2,
            title : 'Kobby Iceberg',
            name : 'Accra',
            picture : '../images/travel.jpg'
        },

        {
            id : 3,
            title : 'Kobby Iceberg',
            name : 'Accra',
            picture : '../images/travel.jpg'
        }
    ]

    const mountains = [
        {
            id : 1,
            name : 'Kumasi',
            title : 'Kobby Mountain',
            picture : '../images/travel.jpg'
        },

        {
            id : 2,
            title : 'Kobby Mountain',
            name : 'Accra',
            picture : '../images/travel.jpg'
        },

        {
            id : 3,
            title : 'Kobby Mountain',
            name : 'Accra',
            picture : '../images/travel.jpg'
        }
    ]

    const waterfalls = [
        {
            id : 1,
            name : 'Kumasi',
            title : 'Kobby Waterfall',
            picture : '../images/travel.jpg'
        },

        {
            id : 2,
            title : 'Kobby Waterfall',
            name : 'Accra',
            picture : '../images/travel.jpg'
        },

        {
            id : 3,
            title : 'Kobby Waterfall',
            name : 'Accra',
            picture : '../images/travel.jpg'
        }
    ]


    
    return ( 
        <div className="ml-4">
            <NavBar/>

            {/* Hero */}
            <div className="flex justify-between">
            
            <div className="text-5xl ml-4 pt-12 font-bold">
                Explore<br/>
                Beautiful<br/>
                World!<br/>
            </div>

            <div className="text-4xl ml-10 mt-10 hidden lg:flex">
                <GiAirplaneDeparture/>
            </div>            

            <div className="md:hidden lg:block">
                <img src="../images/travel.jpg" alt="travel" className="w-2/4 h-full float-right" />
            </div>
            </div>

            <div className="form-control  w-fit ml-4 mt-4 rounded-lg shadow-lg">
                <div className="input-group">
                    <select  className="select">
                        <option>
                            Pick Location
                        </option>
                        <option>
                            Kumasi
                        </option>
                        <option>
                            Takoradi
                        </option>
                    </select>

                    <select  className="select">
                        <option>
                            Pick Date
                        </option>
                        <option>
                            Kumasi
                        </option>
                        <option>
                            Takoradi
                        </option>
                    </select>

                    <select  className="select">
                        <option>
                            Pick Range
                        </option>
                        <option>
                            Kumasi
                        </option>
                        <option>
                            Takoradi
                        </option>
                    </select>
                    <button className="btn btn-info text-white">Search</button>
                </div>
            </div>



            {/* End of hero */}

            {/* Tour details */}
            <div className="flex ml-4 mt-10 justify-between">
                <div>
                    <h1 className="text-3xl font-medium">Popular Place</h1>
                </div>

                <div >
                    <ul className="flex space-x-4">
                        <li onClick={() => setFilter('beach')} className = "cursor-pointer">Beach</li>
                        <li onClick={() => setFilter('mountain')} className = "cursor-pointer">Mountain</li>
                        <li onClick={() => setFilter('waterfall')} className = "cursor-pointer">Waterfall</li>
                        <li onClick={() => setFilter('iceberg')} className = "cursor-pointer">Iceberg</li>
                        <li className="text-warning"><Link to={'/total-list'}>View all</Link></li>
                    </ul>
                </div>
            </div>

            {/* BeachList */}
            {filter === 'beach' && (<BeachList beaches = {beaches}/>) }
            {filter === 'mountain' && (<MountainList mountains = {mountains}/>) }
            {filter === 'waterfall' && (<WaterFallList waterfalls = {waterfalls}/>) }
            {filter === 'iceberg' && (<IceBergList icebergs = {icebergs}/>) }
            

            

            {/* Explore sections */}

            <div className="mt-10">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src="../images/travel.jpg" alt="travel" className="w-1/2" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-medium">Explore all corners of <br/>
                        The world with us <br/>
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laudantium consequatur quibusdam illo hic a reprehenderit tenetur, ab non ad!
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <p className="flex space-x-3">
                                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md"><TbWorldUpload/></span>
                                <span className="pt-2 font-bold">Flight</span>
                            </p>

                            <p className="flex space-x-3">
                                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md"><FaHotel/></span>
                                <span className="pt-2 font-bold">Hotel</span>
                            </p>

                            <p className="flex space-x-3">
                                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md"><AiOutlineWifi/></span>
                                <span className="pt-2 font-bold">WiFi</span>
                            </p>

                            <p className="flex space-x-3">
                                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md"><MdOutlineFastfood/></span>
                                <span className="pt-2 font-bold">Food</span>
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

             
            </div>
                    {/* Explore Place */}
                    <div className="flex ml-4 mt-10 justify-between">
                <div>
                    <h1 className="text-3xl font-medium">Explore Place</h1>
                </div>

                <div >
                    <ul className="flex space-x-4">
                        <li onClick={() => setFilter('beach')} className = "cursor-pointer">Beach</li>
                        <li onClick={() => setFilter('mountain')} className = "cursor-pointer">Mountain</li>
                        <li onClick={() => setFilter('waterfall')} className = "cursor-pointer">Waterfall</li>
                        <li onClick={() => setFilter('iceberg')} className = "cursor-pointer">Iceberg</li>
                        <li className="text-warning"><Link to={'/total-list'}>View all</Link></li>
                    </ul>
                </div>
            </div>

            {/* BeachList */}
            {filter === 'beach' && (<BeachList beaches = {beaches} className="text-warning"/>) }
            {filter === 'mountain' && (<MountainList mountains = {mountains}/>) }
            {filter === 'waterfall' && (<WaterFallList waterfalls = {waterfalls}/>) }
            {filter === 'iceberg' && (<IceBergList icebergs = {icebergs}/>) }

            {/*  */}

            <div className="grid grid-cols-4 gap-4 mt-10">
                <div className="border-2">
                    <p className="p-6">
                        <span className="text-warning font-bold">24+</span><br/>
                        <span className="text-sm font-semibold">Cities</span></p>
                   
                </div>

                <div className="border-2">
                    <p className="p-6">
                        <span className="text-warning font-bold">700+</span><br/>
                        <span className="text-sm font-semibold">Places</span></p>
                   
                </div>

                <div className="border-2">
                    <p className="p-6">
                        <span className="text-warning font-bold">200+</span><br/>
                        <span className="text-sm font-semibold">Hotels</span></p>
                   
                </div>

                <div className="border-2">
                    <p className="p-6">
                        <span className="text-warning font-bold">2k+</span><br/>
                        <span className="text-sm font-semibold">Reviews</span></p>
                </div>
            </div>

            {/* Gallery */}

            <div className="mt-10">
                <h1 className="text-3xl font-medium">Our Gallery</h1>
                <p className="text-md">Share Your Happy Moment</p>

                <img src="../images/travel.jpg" alt="" />
            </div>

           {/* Footer */}
           <Footer/>
        </div>
     );
}
 
export default Home;