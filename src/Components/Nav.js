import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './ImgFolder/LeoGBoxingLogo.png'

//To Do 
//Make hamburger icon with animation 
//Hamburger icon functionality 

function Nav(props) {

const [hidden, setHidden] = useState(false);

const close = () => {
    setHidden(!hidden);
}

  return (
<div class="bg-gray-900">
<header class="shadow-sm">
  <div class="max-w-screen-4xl p-4 mx-auto">
    <div class="flex items-center justify-between space-x-4 lg:space-x-10">
      <div class="flex lg:w-0 lg:flex-1">
        <img class="w-16 h-16 bg-gray-200 rounded-lg" src={Logo} alt='Logo'/>
      </div>

      <nav class="hidden space-x-8 text-sm font-medium sm:flex">
        <Link class="text-gray-500 hover:text-black" to="/">Home</Link>
        <Link class="text-gray-500 hover:text-black" to="/about">About</Link>
        <Link class="text-gray-500 hover:text-black" to="/fighters">Fighters</Link>
        {/* <Link class="text-gray-500 hover:text-black" to="/FAQ">FAQ</Link> */}
      </nav>

      <div class="items-center sm:justify-end flex justify-center space-x-4 sm:flex">
        <Link 
          class="px-5 py-2 text-sm font-medium text-blue-400 hover:text-white bg-gray-100 hover:bg-blue-400 rounded-lg"
          to="signup"
        >
          Book Session!
        </Link>
      </div>

      <div class="sm:hidden">
        <button class="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
          <span class="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
        </div>
    );
}

export default Nav;