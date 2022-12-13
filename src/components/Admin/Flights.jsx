import { FlightData } from "../../data/FlightData";
import {useSelector} from 'react-redux'
const Flights = () => {
  const flights = useSelector((state)=> state.flights.flights)
    return ( 
        <main>
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
                
                <th>Departure Terminal</th>
                <th>Arrival Date</th>
                
                <th>Arrival Terminal</th>
                <th>Seat Number</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* <tbody>{renderFlights()}</tbody> */}
            <tbody>
              {flights.map((flight, index) => (
                  <tr key={index}>
                    <th>{flight.id}</th>
                    <td>{flight.flight_number}</td>
                    <td>{flight.from}</td>
                    <td>{flight.to}</td>
                    <td>{flight.airline}</td>
                    <td>{flight.departure_date}</td>

                    <td>{flight.departure_terminal}</td>

                    <td>{flight.arrival_terminal}</td>
                    <td>{flight.seat_number}</td>
                    <td>${flight.price}</td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        </div>
        </main>
     );
}
 
export default Flights;