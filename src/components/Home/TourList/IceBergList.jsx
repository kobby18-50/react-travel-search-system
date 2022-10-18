const IceBergList = ({icebergs}) => {
    
    return ( 
        <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10">
        {
            icebergs.map((iceberg) => (
                <div className="card w-96 shadow-xl" key={iceberg.id}>
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