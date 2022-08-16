import React from 'react';
import { Link } from 'react-router-dom'
import PunchedImg from './ImgFolder/punched.jpg'

function About(props) {
    return (
<div>
    <h1 class="flex justify-center text-2xl font-bold text-black sm:text-4xl items-center h-20 bg-gray-50 -mb-10">
        Boxing at its Core.
    </h1>
<aside
  class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-50"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-gray-900 md:text-2xl">
        Boxing at its Core.
      </h2>

      <p class="text-gray-500 md:mt-4 md:block">
        <h4 class="mt-2 mb-2 font-bold text-black">
        What is Boxing</h4>
        Oxford Languages Definition: noun "the sport or practice of fighting with the fists, especially with padded gloves in a roped square ring according to prescribed rules." Often called the sweet science, but has many other names. 
        <h4 class="mt-2 mb-2 font-bold text-black">My expertise.. What you will learn.</h4>
        I will teach you the fundalmentals of the Boxing. Later down the journey we will build a unique style for you. All this to maximize the chances of you hitting your opponents with effective punches and minimize the amount of damage you take in an exchange.
        <h4 class="mt-2 mb-2 font-bold text-black">The Boxer's Journey.</h4>
         During this process you'll run into challenges and it will be hard work. As your coach I will motivate and guide you through the journey. You will have the opportunity to navigate through tough moments. You will also be given a  chance to be held accountable for your training with proper coaching and guidance. 
      </p>

      <div class="mt-4 md:mt-8">
        <Link
          to="/signup" 
          class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  </div>

  <img
    alt="Boxing"
    src={PunchedImg}
    class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
  />
</aside>

</div>
    );
}

export default About;