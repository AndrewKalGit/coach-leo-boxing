import React from 'react';
import data from '../data.js';
import { Link } from  'react-router-dom'

function SignUp(props) {
    return (
<div>
<section class="bg-gray-700">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:py-12 lg:col-span-2">
        <div>
          <a href="tel:732-202-8989" class="text-2xl font-bold text-red-400"> 732-202-8989 </a>

          <address class="mt-2 not-italic text-white">784 Carolier Ln, North Brunswick Township, NJ 08902</address>
        </div>
      </div>

      <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" for="name" id="name" />
          </div>
           <div>
            <label class="sr-only" for="name">Address</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Address" type="text" id="name" />
          </div>

           <div>
            <label class="sr-only" for="name">Phone</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Phone" type="tel" id="name" />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label class="sr-only" for="email">Text</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="City"
                type="text"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Zip Code"
                type="tel"
                id="phone"
              />
            </div>

             <div>
              <select class="rounded">
  <option value="NJ">New Jersey</option>
  <option value="NY">New York</option>         
  <option value="PA">Pennsylvania</option>     
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</select>
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
     

        
          </div>
          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full h-16 p-3 text-sm border-gray-200 rounded-lg"
              placeholder="List any Medical Conditions, you wish to enclose"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="grid grid-flow-row grid-row-3">
          <h1> Please show proof of vaccination in person </h1>
             <h1>
            <span class='mr-4'>Covid Vaccinated: <input class="rounded-sm" type="checkbox"></input></span>
            Booster: <input class="rounded-sm" type="checkbox"></input>
          </h1>
          </div>

           <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full h-12 p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Family Members that attend BBS"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div>
            <label class="sr-only" for="name">Name</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Emergency Contact Name" type="Text" for="name" id="name" />
          </div>
  
           <div>
            <label class="sr-only" for="name">Phone</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Emergency Contact Phone" type="tel" id="name" />
          </div>


          <div class="mt-4">
            <Link
              to="signupcomplete"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-red-400 rounded-lg sm:w-auto hover:bg-red-700"
            >
              <span class="font-medium"> Send Inquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default SignUp;