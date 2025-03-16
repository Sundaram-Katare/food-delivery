import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";

function DownFoot() {

   function takeToUrlX(){
    window.location = "https://x.com/sundaramkatare"
   }

   function takeToUrlY(){
    window.location = "https://www.linkedin.com/in/sundaram-katare5"
   }

    return (
        <footer className="w-full bg-gray-900 text-white py-6 px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                
                {/* Left Section - Copyright */}
                <div className="font-light text-center md:text-left mb-4 md:mb-0">
                    © ZippyGrocers Commerce Private Limited, 2016-2025
                </div>

                {/* Center - Download App */}
                <div className="font-bold text-center mb-4 md:mb-0">
                    <h1>Download App</h1>
                </div>

                {/* Right Section - Social Icons */}
                <div className="flex space-x-6 cursor-pointer">
                    <FaFacebook className="w-8 h-8 md:w-10 md:h-10" onClick={takeToUrlX}/>
                    <FaTwitter className="w-8 h-8 md:w-10 md:h-10" onClick={takeToUrlX}/>
                    <FaInstagramSquare className="w-8 h-8 md:w-10 md:h-10" onClick={takeToUrlY}/>
                    <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" onClick={takeToUrlY} />
                    <FaSquareThreads className="w-8 h-8 md:w-10 md:h-10" onClick={takeToUrlY}/>
                </div>
            </div>
        </footer>
    );
}

export default DownFoot;
