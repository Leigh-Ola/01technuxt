<template>
  <aside
    id="most_popular"
    class="overflow-hidden relative ubuntu block w-screen -top-1 bg-white m-0"
  >
    <div class="font-bold pt-6 text-black text-center text-2xl z-10 relative">
      Most Popular Services
    </div>
    <span class="block my-5 px-2 text-black text-center text-base z-10 relative"
      >Here are some of our services in high demand</span
    >
    <div
      class="w-11/12 h-min py-6 max-w-3xl flex justify-between mx-auto flex-col sm:flex-row align-center z-10 relative"
    >
      <!--  max-h-40 bg-white  -->
      <div
        class="relative w-10/12 sm:w-1/4 mx-auto sm:mx-0 my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Custom Software</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >Complete software solutions born only from your unique needs to take
          you and your organization to the next levels
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/software.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/4 mx-auto sm:mx-0 my-8 max-h-40 items-center flex-shrink py-2 px-4 flex rounded-sm bg-white flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span class="text-bold text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Mobile App</span
        >
        <span
          class="z-10 relative min-w-min text-gray-800 mx-auto text-xs text-center"
          >Impressive smartphone and tablet solutions to boost your mobile
          existence and impact your smart growth
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/app.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/4 mx-auto sm:mx-0 my-8 max-h-min items-center flex-shrink py-2 px-4 flex rounded-sm bg-white flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span class="text-bold text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Web Development</span
        >
        <span
          class="z-10 relative min-w-min text-gray-800 m-auto text-xs text-center"
          >Whether you need to build a custom web page from scratch, migrate
          your legacy backend, or streamline existing front-end functionality,
          we can accomplish that efficiently and cost-effectively.
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/web.png"
          alt=""
        />
      </div>
    </div>
    <!--  leading-loose -->
    <!--  mx-auto text-bolder text-black sm:text-white hover:text-black hover:bg-white bg-white sm:bg-transparent border-2 border-black sm:border-white border-solid rounded-lg w-44 h-10 relative z-10 -->
    <nuxt-link
      to="/services"
      class="xmore leading-snug no-underline hover:no-underline justify-center quicksand mx-auto flex text-center w-44 h-10 relative z-10 bottom-6"
    >
      MORE
      <!-- <button class="cssbuttons-io-button"> Get started -->
      <div class="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <!-- </button> -->
      <!-- <span class="rounded-sm border-b-2 border-white border-solid">MORE</span>
      <svg
        style="fill: #ffffff; top: calc(50% - 0.25em)"
        width="15px"
        height="10px"
        viewBox="0 0 13 10"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg> -->
    </nuxt-link>

    <!--  -->
    <img
      id="waves"
      class="absolute block z-0 bottom-0 flex-grow-0 flex-shrink-0 left-0 min-w-full w-full h-190 sm:min-h-11/12"
      src="/img/cloudy.svg"
      alt=""
    />
    <!-- src="/img/stacked-waves1.png" -->
  </aside>
</template>

<script>
export default {
  name: "MostPopular",
};
</script>
