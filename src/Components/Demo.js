import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Demo(props) {
//To do: make demo landing page paragraph to 
  

  const headingStatement = ['Confident', 'Courageous', 'Consistent', 'A Champion']

  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const intervalID = setInterval(() => {
      if (index < headingStatement.length -1) {
        setIndex(index + 1)
      }
      if (index === headingStatement.length -1) {
        setIndex(index - headingStatement.length + 1)
      }
    }, 3000);
    return () => clearInterval(intervalID);
  },);

return (
 <aside className="Demo-bgImg">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-red-700/20">
    <div class="text-center sm:text-left">
      <h2 class="p-2 text-2xl font-bold text-white sm:text-3xl md:text-5xl flex justify-center">
        Become &nbsp; <span> {headingStatement[index]} </span>
      </h2>
      <div class="flex justify-center items-center">
      <p
        class="hidden p-2 bg-gray-400/60 text-white/90 sm:w-3/4 md:w-2/4 md:mt-6 md:text-lg md:leading-relaxed md:flex font-bold"
      >
        Boxing is more than JUST A SPORT. To many, Boxing represents a lifestyle. Brunswick Boxing Stars (BBS) is committed to helping every individual along their journey toward learning the fundamental skills of Boxing while also finding their own unique approach.  At Brunswick Boxing Stars, we strive to help you confidently walk through life with one more skill set in your arsenal. Whether your goal is to feel more confident in life, get fit or prepare for competition, our doors are always open!
      </p> 
      </div>
      <div class="flex justify-center mt-4 sm:mt-8">
        <Link
          class="inline-flex items-center px-8 py-3 text-white transition bg-gray-700 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-red-700 hover:bg-gray-800"
          to="signup"
        >
          <span class="text-sm font-medium"> Start Training </span>

          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</aside>
    );
}

export default Demo;