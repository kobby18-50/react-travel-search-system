import { BeachData } from "../../../data/BeachData";
import { MountainData } from "../../../data/MountainData";
import { WaterFallData } from "../../../data/WaterFallData";
import { IceBergData } from "../../../data/IceBergData";

const TotalList = () => {
  return (
    <div className="pl-[20px]">
      <div className="lg:text-4xl sm:text-2xl md:text-3xl lg:text-center ml-4 pt-12 font-bold">
        Beaches
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-3 lg:gap-4 mt-10">
            {
                BeachData.map((beach) => (
                    <div className="card lg:w-96 w-80 mb-10 shadow-xl" key={beach.id}>
                        <figure><img src={beach.picture} alt="beach" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{beach.title}</h2>
                            <p>{beach.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
      <div className="lg:text-4xl sm:text-2xl md:text-3xl lg:text-center ml-4 pt-12 font-bold">
        Mountains
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
            {
                MountainData.map((mountain) => (
                    <div className="card lg:w-96 shadow-xl w-80 mb-10" key={mountain.id}>
                        <figure><img src={mountain.picture} alt="tour" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{mountain.title}</h2>
                            <p>{mountain.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
      <div className="lg:text-4xl sm:text-2xl md:text-3xl lg:text-center ml-4 pt-12 font-bold">
        WaterFalls
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
            {
                WaterFallData.map((waterfall) => (
                    <div className="card lg:w-96 w-80 mb-10 shadow-xl" key={waterfall.id}>
                        <figure><img src={waterfall.picture} alt="tour" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{waterfall.title}</h2>
                            <p>{waterfall.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
      <div className="lg:text-4xl sm:text-2xl md:text-3xl lg:text-center ml-4 pt-12 font-bold">
        IceBergs
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
        {
            IceBergData.map((iceberg) => (
                <div className="card lg:w-96 w-80 mb-10 shadow-xl" key={iceberg.id}>
                    <figure><img src={iceberg.picture} alt="Iceberg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{iceberg.title}</h2>
                        <p>{iceberg.name}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  );
};

export default TotalList;
