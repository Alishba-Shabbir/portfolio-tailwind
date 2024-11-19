
  import { FaFacebookF } from "react-icons/fa";
  import {  FaGithub} from "react-icons/fa";
  import { FaLinkedinIn } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
import {  FaTiktok} from "react-icons/fa";

  
  export default function Contact() {
    return (
      <div className="bg-gray-900 py-20 px-5">
        <div className="contact grid grid-cols-1 md:grid-cols-2 gap-10 md:px-40 px-5">
          
          {/* Contact Text Section */}
          <div className="contact-text text-white">
            <h2 className="text-5xl font-extrabold leading-tight mb-10">
              Contact <span className="text-orange-500">Me!</span>
            </h2>
            <h4 className="text-3xl font-semibold mb-5">If you have any project in your mind.</h4>
            <p className="text-lg text-gray-400 mb-10">
              I am a web Developer - creating bold & brave interface design for companies all over the world.
            </p>
            
            {/* Contact Info */}
            <ul className="list-none mb-10">
              <li className="mb-3">
                <a href="tel:03253657042" className="text-lg text-gray-400 hover:text-white hover:translate-y-1 transition-all ease-in-out duration-300">
                  03253657042
                </a>
              </li>
              <li>
                <a href="mailto:alishbashabbir312@gmail.com" className="text-lg text-gray-400 hover:text-white hover:translate-y-1 transition-all ease-in-out duration-300">
                  alishbashabbir312@gmail.com
                </a>
              </li>
            </ul>
  
            {/* Social Media Icons */}
            <div className="contact-icons flex space-x-4">
              <FaFacebookF className="icon text-gray-400 hover:text-orange-600 transition-all ease-in-out duration-300 text-4xl p-1 rounded-full" />
              <FaGithub className="icon text-gray-400 hover:text-orange-600 transition-all ease-in-out duration-300 text-4xl p-1 rounded-full" />
              <FaLinkedinIn className="icon text-gray-400 hover:text-orange-600 transition-all ease-in-out duration-300 text-4xl p-1 rounded-full" />
              <FaInstagram className="icon text-gray-400 hover:text-orange-600 transition-all ease-in-out duration-300 text-4xl p-1 rounded-full" />
              <FaTiktok className="icon text-gray-400 hover:text-orange-600 transition-all ease-in-out duration-300 text-4xl p-1 rounded-full" />
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="contact-form">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-5 bg-gray-600 text-gray-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-5 bg-gray-600 text-gray-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                required
                className="w-full p-5 bg-gray-600 text-gray-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="How can I help you?"
                required
                className="w-full p-5 bg-gray-600 text-gray-300 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-60 resize-none"
              />
              <input
                type="submit"
                value="Send Message"
                className="w-40 p-3 bg-orange-500 text-gray-200 font-semibold text-lg rounded-lg hover:scale-105 transition-all ease-in-out duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
  