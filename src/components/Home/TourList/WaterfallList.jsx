const WaterfallList = ({waterfalls}) => {

    return ( 
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-10">
            {
                waterfalls.map((waterfall) => (
                    <div className="card w-96 shadow-xl" key={waterfall.id}>
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