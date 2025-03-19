import footerLogo from '../../../images/logo1dark.png'

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Company Name */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img
              className="h-50 ml-2" src={footerLogo} alt="" />
            </div>
          </div>
  
          {/* Location */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-orange-400 text-lg font-semibold">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.801847949881!2d85.27875527605308!3d27.69358022538426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1902c99c0b7b%3A0xcfc6f5f02f95748c!2sAmbience%20Infosys%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1647245820601!5m2!1sen!2snp"
              width="200"
              height="150"
              allowFullScreen=""
              loading="lazy"
              className="mt-2 border border-gray-500"
            ></iframe>
          </div>
  
          {/* Services */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-orange-400 text-lg font-semibold">OUR SERVICES</h3>
            <ul className="mt-2 space-y-1">
              <li>PLUMBING</li>
              <li>ELECTRICIAN</li>
              <li>HOME APPLIANCE</li>
              <li>WELDING</li>
              <li>CARPENTING</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-orange-400 text-lg font-semibold">CONTACT</h3>
            <ul className="mt-2 space-y-1">
              <li>📍 Kalanki, Kathmandu, Nepal</li>
              <li>📧 info@serviceaggregator.com</li>
              <li>📞 +977-9843883339</li>
              <li>Sun-Fri: 9am-6pm</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
          Copyright &copy;2025 All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  