import React from 'react';
import { Link } from 'react-router-dom'
import PunchedImg from './ImgFolder/punched.jpg'

function About(props) {
    return (
<div>
<aside
  class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-900"
>
  <div class="p-2 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white md:text-2xl">
        Brunswick Boxing Stars
      </h2>

      <p class="text-white md:mt-4 md:block">
        <h4 class="mt-2 mb-2 font-bold text-white">Who We Are</h4>
        Brunswick Boxing Stars (BBS) is a family and minority owned and operated Boxing Gym that has called New Brunswick, New Jersey our home for the past 11 years. BBS relocated to a beautiful, new home in North Brunswick, New Jersey in 2022 due to a proposed redevelopment project in New Brunswick.
        <h4 class="mt-2 mb-2 font-bold text-white">Our Mission</h4>
     Brunswick Boxing Stars is proud to serve children and adults ages 8 and above.  Our clients are like family and we have become more than just a Boxing Gym to the community at large. As a Community focused Gym, BBS has spearheaded speaking engagements with dinner for the youth, holiday parties with gifts, Back-To-School events, food give-aways, equipment and membership sponsorships for boxers who may be facing a challenge, mentorship programs, turkey and grocery giveaways and gift cards, neighborhood clean ups and so much more.
      </p>

      <div class="mt-4 md:mt-8">
        <Link
          to="/signup" 
          class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-red-500 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
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