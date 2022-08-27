import React from 'react';
import data from '../data'

function SignUpHolder(props) {
    return (
<div>
<section class="bg-gray-700">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:py-12 lg:col-span-2">
        <h1 class="text-white text-4xl font-extrabold">Membership</h1>
        <p class="text-white max-w-xl text-lg">
         Base Pricing: ${data[0].GeneralAdmisionPrice}
        </p>
        <br></br>
         <h1 class="text-white text-4xl font-extrabold">1 on 1: Personal Training</h1>
        <p class="text-white max-w-xl text-lg">
         $Variable Rate
        </p>

        <div class="mt-8">
          <a href="tel:732-202-8989" class="text-2xl font-bold text-red-400"> 732-202-8989 </a>

          <address class="mt-2 not-italic text-white">784 Carolier Ln, North Brunswick Township, NJ 08902</address>
        </div>
      </div>

      <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Address"
                type="text"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>

            <div>
              <label class="sr-only" for="text">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Emergency Contact Name"
                type="text"
              />
            </div>

         <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>

     
         <div>
              <label class="sr-only" for="text">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="State"
                type="text"
              />
            </div>

         <div>
              <label class="sr-only" for="text">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="City"
                type="text"
              />
            </div>

            <div>
              Date of Birth
              <label class="sr-only" for="text">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Date of Birth"
                type="date"
              />
            </div>
            <div>
              Family members that attend BBS:
              <label class="sr-only" for="phone">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Name(s)"
                type="text"
              />
            </div>
          </div>
          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="List any Medical Conditions, you wish to enclose"
              rows="8"
              id="message"
            ></textarea>
          </div>
             <h1> Please show proof of vaccination in person </h1>
             <h1>
            <span class='mr-4'>Covid Vaccinated: <input class="rounded-sm" type="checkbox"></input></span>
            Booster: <input class="rounded-sm" type="checkbox"></input>
          </h1>

          <div class="mt-4">
            <h1 class="text-black text-4xl font-extrabold">Form Sent. 
            <br></br>Complete payment in person</h1>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    );
}

export default SignUpHolder;