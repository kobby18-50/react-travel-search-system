import {WaterFallData} from "../../../data/WaterFallData"
const WaterfallList = () => {

    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
            {
                WaterFallData.filter((waterfall, index) => index < 3)
                .map((waterfall) => (
                    <div className="card lg:w-96 mb-10 w-80 shadow-xl" key={waterfall.id}>
                        <figure><img src={waterfall.picture} alt="tour" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{waterfall.title}</h2>
                            <p>{waterfall.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
     );
}
 
export default WaterfallList;