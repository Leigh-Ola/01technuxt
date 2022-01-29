<template>
  <aside
    id="why_us"
    class="overflow-hidden relative ubuntu flex flex-col w-screen -top-1 bg-white text-black m-0"
  >
    <div
      class="w-full pt-10 pb-5 h-10 text-black text-bold text-2xl text-center relative z-20"
    >
      Why Us?
    </div>
    <!-- triggers -->
    <div
      class="overflow-hidden m-5 mb-0 bg-blue-100 border-b-0 border-blue-600 border-2 border-solid rounded-t-xl flex flex-col mr-auto w-max-content min-h-20 bg-red justify-start relative z-20"
    >
      <div class="flex">
        <span
          :style="{ left: active == 1 ? '0px' : active == 2 ? '33%' : '66%' }"
          class="w-1/3 h-full bg-white absolute top-0 transition-all duration-500"
        ></span>
        <div
          :class="[active == 1 ? 'active' : '']"
          @click="active = 1"
          class="xtrigger relative h-12 w-12 flex flex-col text-center justify-center items-center"
        >
          <span
            class="flex flex-col justify-center align-center border-blue-600 border-2 border-solid relative z-10 text-xs text-bold h-6 w-6 m-auto rounded-full"
            >1</span
          >
          <span
            class="xfade block border-blue-600 border-2 border-solid rounded-full h-6 w-6 m-auto absolute z-20"
          ></span>
        </div>
        <div
          :class="[active == 2 ? 'active' : '']"
          @click="active = 2"
          class="xtrigger relative h-12 w-12 flex flex-col text-center justify-center items-center"
        >
          <span
            class="flex flex-col justify-center align-center border-blue-600 border-2 border-solid relative z-10 text-xs text-bold h-6 w-6 m-auto rounded-full"
            >2</span
          >
          <span
            class="xfade block border-blue-600 border-2 border-solid rounded-full h-6 w-6 m-auto absolute z-20"
          ></span>
        </div>
        <div
          :class="[active == 3 ? 'active' : '']"
          @click="active = 3"
          class="xtrigger relative h-12 w-12 flex flex-col text-center justify-center items-center"
        >
          <span
            class="flex flex-col justify-center align-center border-blue-600 border-2 border-solid relative z-10 text-xs text-bold h-6 w-6 m-auto rounded-full"
            >3</span
          >
          <span
            class="xfade block border-blue-600 border-2 border-solid rounded-full h-6 w-6 m-auto absolute z-20"
          ></span>
        </div>
      </div>
    </div>
    <!-- content -->
    <div
      class="overflow-x-visible flex rounded-b-xl rounded-tr-xl m-5 mt-0 relative bottom-0.5 z-30 border-solid border-2 border-blue-600 bg-white text-black"
    >
      <span class="block absolute left-0 -top-1 w-36 h-3 bg-white z-20"></span>
      <!--  1:  h-68; 2: 40; 3: 36 -->
      <div
        :class="{
          'h-72 sm:h-40': active == 1,
          'h-40 sm:h-24': active == 2,
          'h-36 sm:h-24': active == 3,
        }"
        class="flex w-full max-w-full transition-all duration-500 overflow-hidden rounded-xl relative z-10 left-0 top-0 bg-white"
      >
        <div
          :class="[active == 1 ? 'left-0' : 'left-full']"
          class="flex items-center w-full sm:h-full sm:my-auto bg-white top-0 p-5 flex-shrink-0 absolute self-center z-10 transition-all duration-500"
        >
          We provide a flexible, affordable and end-to-end solution with further
          support and maintenance. <br /><br />
          Our team joins your development processes at any stage, whether it's
          consulting, development or support.
        </div>
        <div
          :class="[active >= 2 ? 'left-0' : 'left-full']"
          class="flex items-center w-full sm:h-full sm:my-auto bg-white top-0 p-5 flex-shrink-0 absolute self-center z-20 transition-all duration-500"
        >
          Our development team is passionate about staying ahead of the
          technology curve and utilizing the newest tools.
        </div>
        <div
          :class="[active == 3 ? 'left-0' : 'left-full']"
          class="flex items-center w-full sm:h-full sm:my-auto bg-white top-0 p-5 flex-shrink-0 absolute self-center z-30 transition-all duration-500"
        >
          We can work with virtually any technology stack, from HTML to C# and
          everything in between and out of that.
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "MostPopular",
  data() {
    return {
      active: 1,
    };
  },
};
</script>
