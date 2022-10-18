const MountainList = ({mountains}) => {
    
    return ( 
        <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10">
            {
                mountains.map((mountain) => (
                    <div className="card w-96 shadow-xl" key={mountain.id}>
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