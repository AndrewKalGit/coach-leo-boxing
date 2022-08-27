import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './ImgFolder/LOGO.png'
import OutsideClickHandler from 'react-outside-click-handler';

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
      <Link to="/" class="flex lg:w-0 lg:flex-1">
        <img class="w-12 h-12 bg-white rounded-lg" src={Logo} alt='Logo'/>
      </Link>

      <nav class="hidden space-x-8 text-sm font-medium sm:flex">
        <Link class="text-gray-300 hover:text-white" to="/">Home</Link>
        <Link class="text-gray-300 hover:text-white" to="/about">About</Link>
        <Link class="text-gray-300 hover:text-white" to="/coaches">Coaches</Link>
        {/* <Link class="text-gray-500 hover:text-black" to="/FAQ">FAQ</Link> */}
      </nav>

      <div class="items-center sm:justify-end flex justify-center space-x-4 sm:flex">
        <Link 
          class="px-5 py-2 text-sm font-medium text-white hover:text-white bg-red-400/50 hover:bg-red-500 rounded-lg"
          to="signup"
        >
          Join Today!
        </Link>
      </div>
    </div>
  </div>
</header>
	<nav className={`Hamburger-Menu${hidden ? 'clicked' : 'unclicked'}`}>
						<OutsideClickHandler
							onOutsideClick={() => {
								setHidden(false);
							}}>
							<button
								onClick={close}
								type='button'>
								{hidden ? '' : ''}
								<div
									className={`Hamburger-icon1${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon2${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon3${hidden ? 'animate' : ''}`}></div>
							</button>
						</OutsideClickHandler>
					</nav>
          	<div className={`Nav-HamburgerContent${hidden ? 'Nav-HamburgerContentshow' : ''}`}>
						<div className='Nav-HamburgerContentshow'>
						<Link className='Nav-Links-Hambuger' to='/'>
							Home
						</Link>
						<Link className='Nav-Links-Hambuger' to='/about'>
							About
						</Link>
						<Link className='Nav-Links-Hambuger' to='/coaches'>
							Coaches
						</Link>
					</div>
        </div>
</div>
    );
}

export default Nav;