

const BeachList = ({beaches}) => {

    return ( 
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 mt-10">
            {
                beaches.map((beach) => (
                    <div className="card w-96 shadow-xl" key={beach.id}>
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