import React from 'react';

//To Do: Make Years of Coaching a Dynamic number that counts up at start of screen

function Stats(props) {
    return (
        <div>
            <section class="bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto md:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-white sm:text-4xl underline">
        Brunswick Boxing Stars
      </h2>

      {/* <p class="mt-4 text-gray-100 sm:text-xl">
        We offers a wide variety of experience to bring to the table with our coaches. More importantly our abiltiy to connect to our fighters and ability to hold our fighters accountable makes us a great team. Above all our respect and eagerness to see you succeed in training or competition makes Brunswick Boxing Star a valuable asset to the world of Boxing and to you.
      </p> */}
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-200">
            Members
          </dt>

          <dd class="text-4xl font-extrabold text-red-400 md:text-5xl">
            100+
          </dd>
        </div>

        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-200">
            Years serving the Boxing Community
          </dt>

          <dd class="text-4xl font-extrabold text-red-400 md:text-5xl">12+</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
        </div>
    );
}

export default Stats;