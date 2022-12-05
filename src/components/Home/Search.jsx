import { FlightData } from "../../data/FlightData";
const Search = () => {
  return (
    <>
    <main className="ml-4 flex justify-center">
      <div className="form-control w-fit ml-4 mt-4 rounded-lg shadow-lg ">
        <div className="input-group">
          <select className="select">
            <option>Pick Location</option>
            <option>Kumasi</option>
            <option>Takoradi</option>
          </select>

          <select className="select">
            <option>Pick Date</option>
            <option>Kumasi</option>
            <option>Takoradi</option>
          </select>

          <select className="select">
            <option>Pick Range</option>
            <option>100 -200</option>
            <option>300 -400</option>
          </select>

          <button className="btn btn-info text-white">Search</button>
        </div>
      </div>
    </main>

    <div className="ml-4">
      {/* tabledata */}

      <div className="overflow-x-auto mt-5">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Flight Number</th>
              <th>From</th>
              <th>To</th>
              <th>Airline</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Departure Terminal</th>
              <th>Arrival Date</th>
              <th>Arrival Time</th>
              <th>Arrival Terminal</th>
              <th>Seat Number</th>
            </tr>
          </thead>

          <tbody>
            {
              FlightData.map((flight, index) => (
                <tr key={index}>
                  <th>{flight.id}</th>
                  <td>{flight.flight_number}</td>
                  <td>{flight.from}</td>
                  <td>{flight.to}</td>
                  <td>{flight.airline}</td>
                  <td>{flight.departure_date}</td>
                  <td>{flight.departure_time}</td>
                  <td>{flight.departure_terminal}</td>
                  <td>{flight.arrival_date}</td>
                  <td>{flight.arrival_time}</td>
                  <td>{flight.arrival_terminal}</td>
                  <td>{flight.seat_number}</td>
                  <td></td>


                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* {
        FlightData.map((flight, index) => {

        } )
      } */}
    </div>

    
    </>
  );
};

export default Search;
