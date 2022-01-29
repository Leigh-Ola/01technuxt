<template>
  <!-- mt-7 mb-3  -->
  <div
    class="table_of_contents relative font-bold text-black text-center text-3xl z-30 flex flex-col"
  >
    <!-- box with text & trigger -->
    <div class="flex flex-row z-20 w-screen overflow-hidden flex-shrink-0">
      <div class="mx-auto">Serving the Largest Industries, and beyond</div>

      <div
        v-on:click="hide = !hide"
        class="hover:bg-blue-100 order-first active:bg-blue-500 w-10 h-10 flex flex-col rounded-lg p-2 ml-4 color-black"
      >
        <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
        <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
        <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
      </div>
    </div>
    <!-- box with dropdown -->
    <!-- bg-gray-800 -->
    <div
      :class="[hide ? 'hide' : '']"
      class="list_box h-min-content bg-gray-900 w-screen overflow-hidden text-white font-normal flex flex-col text-xs z-10 relative"
    >
      <!-- 
      Company (home)
      Industries
        > Legal
        > Healthcare
        > Finance
        > Entertainment
      Services
      Contact Us

      v-on:click="hide = true" 
     -->
      <div class="flex flex-col h-auto w-full max-w-full">
        <a href="/" class="list_item relative text-left py-3 px-5 hover:pointer"
          >Home</a
        >
        <a
          href="#"
          @click="sub_hide = !sub_hide"
          class="flex list_item relative text-left py-3 px-5 hover:pointer"
          >Industries
          <span
            :class="{ turned: sub_hide }"
            class="dropdown ml-3 my-auto shrink-0 w-3 h-3 relative"
          ></span>
        </a>
        <div
          :class="{ hide: sub_hide }"
          class="sub_list_box w-full flex pl-5 relative overflow-hidden flex-col"
        >
          <a
            href="#legal_software"
            v-scroll-to="'#legal_software'"
            class="list_item relative text-left py-3 px-5 hover:pointer"
            >Legal</a
          >
          <a
            href="#health_software"
            v-scroll-to="'#health_software'"
            class="list_item relative text-left py-3 px-5 hover:pointer"
            >Healthcare</a
          >
          <a
            href="#financial_software"
            v-scroll-to="'#financial_software'"
            class="relative list_item py-3 px-5 text-left hover:pointer"
            >Finance</a
          >
          <a
            href="#entertainment_software"
            v-scroll-to="'#entertainment_software'"
            class="relative list_item py-3 px-5 text-left hover:pointer"
            >Entertainment</a
          >
        </div>
        <a
          href="/services"
          class="list_item relative text-left py-3 px-5 hover:pointer"
          >Services</a
        >
        <a
          href="/contact"
          class="list_item relative text-left py-3 px-5 hover:pointer"
          >Contact Us</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableOfContents",
  data() {
    return {
      hide: false,
      sub_hide: false,
    };
  },
};
</script>
