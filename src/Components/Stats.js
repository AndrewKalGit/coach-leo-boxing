import React from 'react';

//To Do: Make Years of Coaching a Dynamic number that counts up at start of screen

function Stats(props) {
    return (
        <div>
            <section class="bg-white">
  <div class="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        About Coach Leo
      </h2>

      <p class="mt-4 text-gray-500 sm:text-xl">
        Coach Leo offers a wide variety of experience to bring to the table. More importantly his abiltiy to connect to his fighters and ability to hold his fighters accountable makes him a great coach. Above all his respect and eagerness to see you succeed in training or competition makes him a valuable asset to the world of Boxing.
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Amateur Fights
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            40
          </dd>
        </div>

        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Years of coaching 
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">15+</dd>
        </div>

        <div
          class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Years of fighting
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">10</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
        </div>
    );
}

export default Stats;