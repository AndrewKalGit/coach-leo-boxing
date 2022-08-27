import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './ImgFolder/LOGO.png'


function Footer(props) {
    return (
        <div>
            <footer class="bg-gray-900">
  <div
    class="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24"
  >

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center lg:justify-start">
        <p
          class="max-w-xl mx-auto leading-relaxed text-center text-gray-500 lg:text-left text-xs"
        >
          <h1 class="font-bold">Privacy Policy</h1>
This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        </div>
      </div>

      <nav class="mt-8 lg:mt-0" aria-labelledby="footer-navigation">
        <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

        <ul
          class="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12"
        >
          <li>
            <Link to="about" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              About
            </Link>
          </li>

          <li>
            <Link to="signup" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Book Session
            </Link>
          </li>

          <li>
            <Link to="FAQ" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              FAQ
            </Link>
          </li>

          {/* <li>
            <Link to="FAQ" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              FAQ
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>

    <p class="mt-4 text-sm text-center text-gray-400 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>

        </div>
    );
}

export default Footer;