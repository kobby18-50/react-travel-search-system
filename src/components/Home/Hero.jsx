import { GiAirplaneDeparture } from "react-icons/gi";

const Hero = ({herosub, herotitle, heromaintitle}) => {
    return ( 
        <div className="flex justify-between">
            
            <div className="lg:text-5xl md:text-4xl sm:text-3xl ml-4 pt-12 font-bold">
                {herosub}<br/>
                {herotitle}<br/>
                {heromaintitle}<br/>
            </div>

            <div className="text-4xl ml-10 mt-10">
                <GiAirplaneDeparture/>
            </div>            

            <div className="md:hidden sm:hidden lg:block">
                <img src="../images/travel.jpg" alt="travel" className="w-2/4 h-full float-right" />
            </div>

            </div>
     );
}
 
export default Hero;