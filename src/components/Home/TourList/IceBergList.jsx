import {IceBergData} from "../../../data/IceBergData"

const IceBergList = () => {
    
    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 sm:grid-cols-1 lg:gap-4 mt-10">
        {
            IceBergData.filter((iceberg, index) => index < 3)
            .map((iceberg) => (
                <div className="card lg:w-96 w-80 shadow-xl mb-10" key={iceberg.id}>
                    <figure><img src={iceberg.picture} alt="Iceberg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{iceberg.title}</h2>
                        <p>{iceberg.name}</p>
                    </div>
                </div>
            ))
        }
        </div>
     );
}
 
export default IceBergList;