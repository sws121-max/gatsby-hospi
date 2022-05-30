import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">The Best services provided by our specialists by 24*7,AS our partners are reliancehospitals and fortishealthcare</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.fortishealthcare.com/terms-and-conditions">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://www.reliancehospitals.com/privacy-policy/">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/gmedicare">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/sws121-max">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;