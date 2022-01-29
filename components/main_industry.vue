<template>
  <div
    class="main_industry flex flex-nowrap overflow-hidden box-border relative z-20 ubuntu block w-screen max-w-full m-0 p-2"
  >
    <div
      class="text-gray-200 bg-black overflow-hidden flex flex-col box-border relative z-20 mt-3 p-5 mr-auto w-full max-w-screen-xl rounded-xl"
    >
      <!-- the background -->
      <div
        class="z-0 bg-white overflow-hidden absolute w-full max-w-full h-full max-h-full left-0 top-0 block"
      >
        <!-- darkens the background -->
        <div
          class="absolute opacity-80 left-0 top-0 w-full h-full bg-black z-10"
        ></div>
        <!-- bg image -->
        <img
          src="/img/glass.svg"
          class="bg_glass scale-150 opacity-80 z-0 absolute w-auto min-w-screen h-full min-h-full left-0 top-0 block"
          alt=""
        />
      </div>
      <!-- notch at the top -->
      <div
        :id="id"
        class="industry_title comfortaa font-bold pt-5 pb-3 text-2xl overflow-visible z-10 relative"
      >
        <div class="block absolute -top-5 left-2 rounded-b-xl bg-white w-6 h-6">
          <div
            class="w-4 h-4 bg-yellow-400 rounded-2xl absolute bottom-1 left-1"
          ></div>
        </div>
        {{ name }}
      </div>
      <div
        class="mx-4 mb-5 px-5 pl-3 py-2 border-solid border-l-4 border-yellow-400 relative z-20"
      >
        <slot name="caption"></slot>
      </div>
      <div class="relative z-20">
        <slot></slot>
      </div>
      <!-- <slot name="sub"></slot> -->
    </div>
    <!-- <div
      class="relative z-20 mx-auto -bottom-9 rounded-lg h-1 w-12 bg-blue-500 block"
    ></div> -->
  </div>
</template>

<script>
export default {
  name: "MainIndustry",
  props: ["name", "id"],
  data() {
    return {};
  },
};
</script>
