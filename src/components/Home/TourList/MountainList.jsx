import {MountainData} from "../../../data/MountainData";
const MountainList = () => {
    
    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
            {
                MountainData.filter((mountain, index) => index < 3)
                .map((mountain) => (
                    <div className="card lg:w-96 w-80 shadow-xl mb-10" key={mountain.id}>
                        <figure><img src={mountain.picture} alt="tour" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{mountain.title}</h2>
                            <p>{mountain.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
     );
}
 
export default MountainList;