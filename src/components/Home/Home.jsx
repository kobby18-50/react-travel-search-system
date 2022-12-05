import { Link } from "react-router-dom";
import { TbWorldUpload } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { FaHotel } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import Hero from "./Hero";
import Explore from "./Explore";

const Home = () => {

  const gallerys = [
    {
      id: 1,
      image: "../images/travel.jpg",
      size : "large"
    },

    {
      id: 2,
      image: "../images/travel.jpg",
    },

    {
      id: 3,
      image: "../images/travel.jpg",
      size : "large"
    },

    {
      id: 4,
      image: "../images/travel.jpg",
    },

    {
      id: 5,
      image: "../images/travel.jpg",
      size : "large"
    },

    {
      id: 6,
      image: "../images/travel.jpg",
    },
  ];

  return (
    <div className="ml-4">
      {/* Navbar */}

      {/* Hero */}
      <Hero
        herosub={"Explore"}
        herotitle={"Beautiful"}
        heromaintitle={"World!"}
      />

      <Link to={'/search'}>
      <button className="btn btn-wide bg-btncolor border-none font-bold text-white hover:bg-btncolor">
        Start for free
      </button>
      </Link>

      {/* End of hero */}

      {/* Tour details */}
      {/* Popular Place */}
      <Explore
        title={"Popular Place"}
      />

      {/* Explore sections */}

      <div className="mt-10">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <img
              src="../images/travelhero.jpg"
              alt="travel"
              className="w-1/2"
            />
          </div>

          <div>
            <h1 className="text-3xl font-medium">
              Explore all corners of <br />
              The world with us <br />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              laudantium consequatur quibusdam illo hic a reprehenderit tenetur,
              ab non ad!
            </p>

            <div className="grid grid-cols-2 gap-4">
              <p className="flex space-x-3">
                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md">
                  <TbWorldUpload />
                </span>
                <span className="pt-2 font-bold">Flight</span>
              </p>

              <p className="flex space-x-3">
                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md">
                  <FaHotel />
                </span>
                <span className="pt-2 font-bold">Hotel</span>
              </p>

              <p className="flex space-x-3">
                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md">
                  <AiOutlineWifi />
                </span>
                <span className="pt-2 font-bold">WiFi</span>
              </p>

              <p className="flex space-x-3">
                <span className="text-warning border-2 p-2 text-xl rounded-md shadow-md">
                  <MdOutlineFastfood />
                </span>
                <span className="pt-2 font-bold">Food</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Explore Place */}
      <Explore
        title={"Explore Places"}
      />

      {/*  */}

      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="border-2">
          <p className="p-6">
            <span className="text-warning font-bold">24+</span>
            <br />
            <span className="text-sm font-semibold">Cities</span>
          </p>
        </div>

        <div className="border-2">
          <p className="p-6">
            <span className="text-warning font-bold">700+</span>
            <br />
            <span className="text-sm font-semibold">Places</span>
          </p>
        </div>

        <div className="border-2">
          <p className="p-6">
            <span className="text-warning font-bold">200+</span>
            <br />
            <span className="text-sm font-semibold">Hotels</span>
          </p>
        </div>

        <div className="border-2">
          <p className="p-6">
            <span className="text-warning font-bold">2k+</span>
            <br />
            <span className="text-sm font-semibold">Reviews</span>
          </p>
        </div>
      </div>

      {/* Gallery */}

      <div className="mt-10">
        <h1 className="text-3xl font-medium">Our Gallery</h1>
        <p className="text-md">Share Your Happy Moment</p>

        <div className="flex flex-3">
        {gallerys.map((gallery) => (
            <div key={gallery.id} className="">
              <img src={gallery.image} alt="gallery" />
            </div>
        ))}
        </div>
        
      </div>

      
    </div>
  );
};

export default Home;
