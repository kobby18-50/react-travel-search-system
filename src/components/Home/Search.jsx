import { useState } from "react";
import {useSelector} from 'react-redux'
const Search = () => {
  const [flights, setFlight] = useState(useSelector((state)=> state.flights.flights));
  const [sorted, setSorted] = useState({ sorted: "price", reverse: false });
  const [searchValue, setSearchValue] = useState("");

  // const renderFlights = () => {
  //   return flights.map((flight, index) => {
  //     return (
  //       <tr key={index}>
  //         <th>{flight.id}</th>
  //         <td>{flight.flight_number}</td>
  //         <td>{flight.from}</td>
  //         <td>{flight.to}</td>
  //         <td>{flight.airline}</td>
  //         <td>{flight.departure_date}</td>
  //         <td>{flight.departure_time}</td>
  //         <td>{flight.departure_terminal}</td>
  //         <td>{flight.arrival_date}</td>
  //         <td>{flight.arrival_time}</td>
  //         <td>{flight.arrival_terminal}</td>
  //         <td>{flight.seat_number}</td>
  //         <td>${flight.price}</td>
  //       </tr>
  //     );
  //   });
  // };

  const sortByPrice = () => {
    setSorted({ sorted: "price", reverse: !sorted.reverse });
    const flightcopy = [...flights];
    flightcopy.sort((priceA, priceB) => {
      if (sorted.reverse) {
        return priceA.price - priceB.price;
      }
      return priceB.price - priceA.price;
    });
    setFlight(flightcopy);
  };

  return (
    <>
      <main className="ml-4 flex justify-center lg:space-x-10 sm:space-x-2">
        <input
          type="search"
          className="border w-[60%] outline-none h-10 p-2 rounded shadow-md"
          placeholder="Search By Destination......"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={sortByPrice}
          className="btn bg-btncolor sm:btn-sm sm:mt-2 border-none hover:bg-warning"
        >
          <span className="font-medium capitalize">Filter by Price</span>
        </button>
        {/* <div className="form-control w-fit ml-4 mt-4 rounded-lg shadow-lg ">
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
        </div> */}
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
                
                <th>Departure Terminal</th>
                <th>Arrival Date</th>
                
                <th>Arrival Terminal</th>
                <th>Seat Number</th>
                <th onClick={sortByPrice}>Price</th>
              </tr>
            </thead>

            {/* <tbody>{renderFlights()}</tbody> */}
            <tbody>
              {flights
                .filter((val) => {
                  if (searchValue === "") {
                    return val;
                  } else if (
                    val.to.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((flight, index) => (
                  <tr key={index}>
                    <th>{flight.id}</th>
                    <td>{flight.flight_number}</td>
                    <td>{flight.from}</td>
                    <td>{flight.to}</td>
                    <td>{flight.airline}</td>
                    <td>{flight.departure_date}</td>

                    <td>{flight.departure_terminal}</td>
                    <td>{flight.arrival_date}</td>

                    <td>{flight.arrival_terminal}</td>
                    <td>{flight.seat_number}</td>
                    <td>${flight.price}</td>
                    {/* Action Buttons */}
                    <td className="flex">
                      <p>Edit</p>
                      <p>Delete</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;
