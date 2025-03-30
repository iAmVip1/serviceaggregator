import { Pickaxe , MapPin, Mail, Phone, Clock, Wrench, Zap, Tv, Hammer, Ruler } from 'lucide-react';
import footerLogo from '../../../images/logo1dark.png'


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
        <img
              className="h-50 ml-2" src={footerLogo} alt="" />

        </div>

        {/* Location */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500">Location</h2>
          <iframe 
            className="mt-2 w-full h-34 md:w-62"
            src="https://www.google.com/maps?q=Ambience+Infosys+Pvt.+Ltd&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500">OUR SERVICES</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Wrench /> PLUMBING</li>
            <li className="flex items-center gap-2"><Zap /> ELECTRICIAN</li>
            <li className="flex items-center gap-2"><Tv /> HOME APPLIANCE</li>
            <li className="flex items-center gap-2"><Hammer /> WELDING</li>
            <li className="flex items-center gap-2"><Ruler /> CARPENTING</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500">CONTACT</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin /> Kalanki, Kathmandu, Nepal</li>
            <li className="flex items-center gap-2"><Mail /> info@serviceaggregator.com</li>
            <li className="flex items-center gap-2"><Phone /> +977-9843883339</li>
            <li className="flex items-center gap-2"><Clock /> Sun-Fri: 9am-6pm</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
        Copyright &copy;2025 All Rights Reserved
      </div>
    </footer>
  );
}
