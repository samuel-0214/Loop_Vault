import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/images/Untitled_design-removebg-preview.png"
              alt="LoopVault Logo"
              className="h-60 w-60 object-contain" // Increased the size of the logo significantly
            />
          </div>

          {/* About Us Section */}
          <div className="flex flex-col space-y-4 items-center md:items-start justify-center">
            <h3 className="text-xl font-semibold">About Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#about_section" className="hover:text-gray-300">Mission</a></li>
              <li><a href="#our_team" className="hover:text-gray-300">Team</a></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col space-y-4 items-center md:items-start justify-center">
            <h3 className="text-xl font-semibold">Socials</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="https://x.com/LoopVault_Defi" className="hover:text-gray-300">Twitter</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-4 items-center md:items-start justify-center">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>Telangana, India</li>
              <li>Hyderabad, 500083</li>
              <li>Email: loopvault.defi@gmail.com</li>
              <li>Phone: 9874583047</li>
            </ul>
          </div>
        </div>

        {/* Copy Rights & Back to Top */}
        <div className="border-t border-white mt-8 pt-4 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 LoopVault</p>
          <a href="#top" className="hover:text-gray-300 text-sm">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
