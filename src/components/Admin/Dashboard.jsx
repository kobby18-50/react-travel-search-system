import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { flightActions } from "../../redux/FlightListSlice";

const DashBoard = () => {
  const dispatch = useDispatch()
  const flights = useSelector((state)=> state.flights.flights)

  // States
  const [flight_number, setFlightNumber] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [airline, setAirline] = useState("");
  const [departure_date, setDepartureDate] = useState('');
  const [arrival_date, setArrivalDate] = useState('');
  const [arrival_terminal, setArrivalTerminal] = useState("");
  const [departure_terminal, setDepartureTerminal] = useState("");
  const [seat_number, setSeatNumber] = useState("");
  const [price, setPrice] = useState("");


  // useEffect(() => {
  //   fetch('https://localhost:7001/Flights')
  //   .then((response) => console.log(response))
  // },[])

  function addNewFlight (){
    const newFlight = {
      id : flights.length+1,
      flight_number,
      from ,
      to ,
      airline ,
      departure_date ,
      arrival_date ,
      arrival_terminal ,
      departure_terminal ,
      seat_number  ,
      price 
    }
    dispatch(flightActions.addFlights(newFlight))
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   flight_number,
    //   from,
    //   to,
    //   airline,
    //   departure_date,
    //   arrival_date,
    //   arrival_terminal,
    //   departure_terminal,
    //   seat_number,
    //   price
    // );
    addNewFlight()
  };

  return (
    <main className="">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <main className="grid lg:grid-cols-3 place-items-center gap-4">
          <div className="mb-3">
            <label className="font-normal text-sm">Flight Number</label>
            <br />
            <input
              value={flight_number}
              onChange={(e) => setFlightNumber(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">From</label>
            <br />
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">To</label>
            <br />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Airline</label>
            <br />
            <input
              value={airline}
              onChange={(e) => setAirline(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Departure Date</label>
            <br />
            {/* <DatePicker
              selected={departure_date}
              onChange={(e) => setDepartureDate(e.target.value)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            /> */}
            <input type="date" value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Arrival Date</label>
            <br />
            {/* <DatePicker
              onChange={(e) => setArrivalDate(e.target.value)}
              selected={arrival_date}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            /> */}
             <input type="date" value={arrival_date} onChange={(e) => setArrivalDate(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Arrival Terminal</label>
            <br />
            <input
              value={arrival_terminal}
              onChange={(e) => setArrivalTerminal(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Departure Terminal</label>
            <br />
            <input
              value={departure_terminal}
              onChange={(e) => setDepartureTerminal(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Seat Number</label>
            <br />
            <input
              value={seat_number}
              onChange={(e) => setSeatNumber(e.target.value)}
              type="text"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="font-normal text-sm">Price</label>
            <br />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
              required
            />
          </div>
        </main>

        <button
          type="submit"
          className="bg-btncolor w-[300px] lg:w-[164px] h-[39px] rounded-md mt-5 justify-center"
        >
          <span className="text-base text-white">Add Flight</span>
        </button>
      </form>

      <Link className="grid justify-center"
      to={'/admin/flights'}>
      <button className="btn bg-btncolor w-[300px] lg:w-[164px] h-[39px] rounded-md mt-5 justify-center border-none">
       <span className="text-base text-white capitalize"> View Flights</span>
      </button>
      </Link>

    </main>
  );
};

export default DashBoard;
