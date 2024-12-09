
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () =>{
    return(
        <footer>
            {/* above section of footer */}
            <div className="lg:flex lg:justify-between lg:px-28 text-myblue h-32  bg-gray-100 py-12 pl-9  lg:ml-0">
                <div>
                    <h1 className="font-bold text-2xl text-black">Bandage</h1>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <FaFacebook size={22}/>
                    <FaInstagram  size={22}/>
                    <TiSocialTwitter  size={22}/>
                </div>
            </div>
            <hr className="mt-2 mb-2"/>

            {/* down setion of footter */}
            <div className="lg:flex lg:gap-8 lg:justify-around mt-5 ml-9 lg:ml mb-5 space-y-4 lg:space-y-0">
                 {/* company Info */}
                <div>
                    <h2 className="font-bold text-base">Company Info</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* legal */}
                <div>
                    <h2 className="font-bold text-base">Legal</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                
                 {/* Features */}
                 <div>
                    <h2 className="font-bold text-base">Features</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                 {/* Resources */}
                 <div>
                    <h2 className="font-bold text-base">Resources</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                 {/* email seciton */}
                <div className="flex flex-col">
                    <h2 className="font-bold ">Get In Touch</h2>

                    <input type="text" /><label className="w-[270px] h-14 bg-gray-50 border border-gray-400 py-3 pl-3 text-mygray font-bold ">Your Email</label>
                    <p className="text-[12px] mt-2">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="bg-gray-100 h-16">
                <h2 className="font-bold text-sm ml-20 text-mygray py-5">Made With Love By Finland All Right Reserved </h2>
            </div>

        </footer>
    )
}

export default Footer;