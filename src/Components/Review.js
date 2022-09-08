import { React, useState, useEffect } from 'react';
import BBSFamily from './ImgFolder/BBS Family.png'

function Review(props) {
  const Statement = [
  "Great for college students", 
  "A Pillar in the Community!", 
  "Awesome community tucked away in the industrial section of New Brunswick. Very wholesome but old school atmosphere suitable for all levels and ages. You'll get scrubs like me working on the heavy bag next to a guy preparing for an amateur bout, and we're both welcomed like family. Also glad this gym takes COVID seriously and takes extra precautions and care to provide a safe place for people to work out. Good people, good vibes. Great boxing gym!",
  "Brunswick Boxing stars and JT are a great gym and a great family. I recently moved up here from Florida and they have shown me nothing but kindness. As a matter of fact my first week I left my wallet here and JT found it for me and returned it with everything in it. Other than that it’s a great place to train, great coaches and a great place for the kids.",  
  "So far the only boxing place I have been where you really can practice boxing and actually learn. They have ring and after some time it will be possible to have real fight, it up to you and your coach when you will be ready to go to ring", "Awesome...I wasn't alone for long...dope place" ];
  const nameOfReviewer = ['Sandii Wilkins', 'Yousef Sheikh', 'Rashawn Packwood', 'Joe Bae', 'Rudolph A', 'Petros Abajyan']

  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const intervalID = setInterval(() => {
      if (index < Statement.length -1) {
        setIndex(index + 1)
      }
      if (index === Statement.length -1) {
        setIndex(index - Statement.length + 1)
      }
    }, 7500);
    return () => clearInterval(intervalID);
  },);


  return (
        <div>
            <section class="bg-gray-900">
  <div class="px-4 py-4 sm:py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="items-end justify-between sm:flex sm:justify-center">
      <div class="max-w-xl">
        <h2 class="text-center text-2xl font-bold tracking-tight sm:text-4xl text-white underline">What The Community Is Saying</h2>
        <div>
        <img src={BBSFamily} class='pt-4' alt="BBS Fam"/>
        <p class="max-w-2xl mt-8 text-gray-100 text-center">
          JT and Dionne have served both the Boxing community local communities in multiple ways. Here's what people are saying about this New Brunswick born, North Brunswick Located, Boxing Gym. 
          {/* Center it */}
        </p>
        </div>
      </div>
    </div>
    <div class='flex justify-center'>
    
      </div>
    <div class="flex justify-center text-center">
      <blockquote class="flex flex-col justify-between h-full p-12 bg-gray-900">
        <div>
          <div class="mt-4">
            <h5 class="text-xl font-bold text-red-400 sm:text-2xl"> Reviews </h5>

            <p class="mt-4 text-gray-100">
              {Statement[index]}
            </p>

          </div>
        </div>
        <footer class="mt-8 font-extrabold text-white"> - {nameOfReviewer[index]} </footer>
      </blockquote>
  
    </div>
  </div>
</section>
<div class="flex justify-center">
 <a href="https://www.google.com/search?q=reviews+brunswick+boxing+stars&oq=reviews+brunswick+boxing+stars&aqs=chrome..69i57j33i299j33i22i29i30l2.3680j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89c3c6f388adadb9:0x9b595ce264bba6f7,1,,," alt="reviews"
        class="inline-flex items-center flex-shrink-0 px-5 py-3 mt-2 font-medium text-red-400 border border-red-400 rounded-full sm:mt-0 lg:mt-4 hover:bg-red-500 hover:text-white"
      target="_blank" rel="noreferrer"
      >
        All Reviews

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
</div>
</div>
    );
}

export default Review;
  