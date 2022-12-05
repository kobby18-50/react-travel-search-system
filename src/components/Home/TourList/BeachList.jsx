import { BeachData } from "../../../data/BeachData";

const BeachList = () => {

    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4  mt-10">
            {
                BeachData.filter((beach, index) => index < 3) 
                .map((beach) => (
                    <div className="card lg:w-96 w-80 shadow-xl mb-10 " key={beach.id}>
                        <figure><img src={beach.picture} alt="beach" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{beach.title}</h2>
                            <p>{beach.name}</p>
                        </div>
                    </div>
                ))
            }
            </div>
     );
}
 
export default BeachList;