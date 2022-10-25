import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { SlCallEnd } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return ( 
        <div>
             {/* Footer */}
             <div className="mt-10 mb-5 justify-center items-center">
            <h1 className="font-bold text-center">Sign up to our newsletter</h1>
            <center>
            <div className="form-control  w-fit ml-4 mt-4 rounded-lg shadow-lg items-center">
                <div className="input-group">
                    <input type="text" className="input" placeholder="Enter Your Email Here." />
                    <button className="btn btn-info text-white">Submit</button>
                </div>
            </div>
            </center>
            </div>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Title</span>
                    <p>Travel is fatal to prejudice <br/>
                    and narrow mindedness, <br/>
                    And many of our people
                    </p>
                    <p>Copyright &copy; 2022 - All rights reserved</p>

                    <div className="flex space-x-4 text-xl">
                        <Link to={'/'} className="text-warning"><FaFacebook/> </Link>
                        <Link to={'/'}><BsTwitter/> </Link>
                        <Link to={'/'}><BsInstagram/> </Link>
                        <Link to={'/'}><BsLinkedin/> </Link>
                    </div>
                </div>

                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/category'}>Category</Link>
                    <Link to={'/blog'}>Blog</Link>
                    <Link to={'/about-us'}>About Us</Link>
                </div>

                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link to={'/'}>FAQ's</Link>
                    <Link to={'/'}>Privacy Policy</Link>
                    <Link to={'/'}>Term & Conditions</Link>
                    <Link to={'/'}>Support</Link>
                </div>

                <div>
                    <span className="footer-title">Contact Us</span>
                    <ul className="flex space-x-2">
                        <li className="text-warning text-xl"><GoLocation/> </li>
                        <li>Dansoman, Accra</li>
                    </ul>

                    <ul className="flex space-x-2">
                        <li className="text-warning text-xl"><SlCallEnd/> </li>
                        <li>0555263393</li>
                    </ul>

                    <ul className="flex space-x-2">
                        <li className="text-warning text-xl"><CiMail/> </li>
                        <li>edwardkobby18@gmail.com</li>
                    </ul>
                </div>


            </footer>
                
        </div>
     );
}
 
export default Footer;