<template>
  <aside
    id="topper"
    style="z-index: 999; font-size: 16px"
    :class="[top_relative ? 'absolute' : 'relative']"
    class="top-0 left-0 bg-white w-screen max-w-full px-2 text-black z-20 flex"
  >
    <!--  -->
    <!--  mobile-->
    <div
      :style="{ right: nav_mb_hide ? '110%' : '0px' }"
      @click="nav_mb_hide = true"
      class="xmobile transition-all duration-500 flex h-screen min-h-screen min-w-full w-screen fixed z-30 top-0 right-0"
    >
      <!-- <div
        :class="[nav_mb_hide ? 'bg-transparent' : 'bg-black']"
        class="absolute z-10 w-full bottom-0 left-0 h-full bg-opacity-40"
      >
      </div> -->
      <div
        @click.stop=""
        class="xmobile_nav flex flex-col h-screen mr-auto w-3/4 max-w-xs filter-none py-5 rounded-r-sm overflow-hidden bg-white relative z-20"
      >
        <nuxt-link
          @click="nav_mb_hide = true"
          class="no-underline hover:no-underline"
          to="/"
        >
          <img
            style="height: 98px"
            class="mx-auto my-5"
            src="/img/01tech_logo.png"
            alt=""
          />
        </nuxt-link>
        <a
          href="#"
          @click="sub_nav_mb_hide = !sub_nav_mb_hide"
          class="list_item has_dropdown flex hover:bg-blue-100 px-5 py-3 text-center items-center relative no-underline hover:no-underline font-bold hover:pointer"
          >Industries
          <span
            :class="{ turned: sub_nav_mb_hide }"
            class="dropdown ml-3 my-auto shrink-0 w-1 h-3 relative"
          ></span>
        </a>
        <div
          @click="nav_mb_hide = true"
          :class="{ hide: sub_nav_mb_hide }"
          class="flex flex-col text-gray-600 bg-blue-100 flex-shrink-0 min-w-full w-full relative sub_list_box mx-auto overflow-hidden"
        >
          <a
            :href="[
              is_industries ? '/industries#legal_software' : '/industries',
            ]"
            v-scroll-to="'#legal_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 text-left py-3 px-5 hover:pointer no-underline hover:no-underline"
            >Legal</a
          >
          <a
            :href="[
              is_industries ? '/industries#health_software' : '/industries',
            ]"
            v-scroll-to="'#health_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 text-left py-3 px-5 hover:pointer no-underline hover:no-underline"
            >Healthcare</a
          >
          <a
            :href="[
              is_industries ? '/industries#financial_software' : '/industries',
            ]"
            v-scroll-to="'#financial_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 py-3 px-5 text-left hover:pointer no-underline hover:no-underline"
            >Finance</a
          >
          <a
            :href="[
              is_industries
                ? '/industries#entertainment_software'
                : '/industries',
            ]"
            v-scroll-to="'#entertainment_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 py-3 px-5 text-left hover:pointer no-underline hover:no-underline"
            >Entertainment</a
          >
        </div>
        <a
          @click="nav_mb_hide = true"
          href="/services"
          class="list_item flex hover:bg-blue-100 px-5 py-3 text-center items-center relative no-underline hover:no-underline font-bold hover:pointer"
          >Services
        </a>
        <a
          @click="nav_mb_hide = true"
          href="/contact"
          class="list_item flex hover:bg-blue-100 px-5 py-3 text-center items-center relative no-underline hover:no-underline font-bold hover:pointer"
          >Contact Us
        </a>
      </div>
    </div>
    <!--  -->
    <!-- pc -->
    <nuxt-link class="no-underline hover:no-underline relative z-20" to="/">
      <img class="h-24 mr-auto" src="/img/01tech_logo.png" alt="" />
    </nuxt-link>
    <!-- topmost list box -->
    <div
      class="xpc flex relative z-20 overflow-visible py-5 w-auto min-w-min ml-auto"
    >
      <div class="w-full h-16 p-0 flex relative my-auto">
        <div
          @click.stop="nav_mb_hide = false"
          class="flex md:hidden hover:bg-blue-100 order-first active:bg-blue-500 w-10 h-10 flex-col rounded-lg p-2 my-auto mx-4 color-black"
        >
          <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
          <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
          <div class="w-full h-1/5 bg-black rounded-xl my-auto"></div>
        </div>
        <a
          href="#"
          @click="nav_pc_hide = !nav_pc_hide"
          class="list_item has_dropdown hidden md:flex text-base mr-1 rounded-sm hover:bg-blue-100 px-3 justify-center text-center items-center relative no-underline hover:no-underline font-bold hover:pointer"
          >Industries
          <span
            :class="{ turned: nav_pc_hide }"
            class="dropdown ml-3 my-auto shrink-0 w-1 h-3 relative"
          ></span>
        </a>
        <div
          :class="{ hide: nav_pc_hide }"
          class="flex flex-col bg-blue-100 flex-shrink-0 min-w-min absolute top-16 left-0 sub_list_box mx-auto rounded-sm overflow-hidden"
        >
          <a
            :href="[
              is_industries ? '/industries#legal_software' : '/industries',
            ]"
            v-scroll-to="'#legal_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 text-left py-3 px-5 hover:pointer no-underline hover:no-underline"
            >Legal</a
          >
          <a
            :href="[
              is_industries ? '/industries#health_software' : '/industries',
            ]"
            v-scroll-to="'#health_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 text-left py-3 px-5 hover:pointer no-underline hover:no-underline"
            >Healthcare</a
          >
          <a
            :href="[
              is_industries ? '/industries#financial_software' : '/industries',
            ]"
            v-scroll-to="'#financial_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 py-3 px-5 text-left hover:pointer no-underline hover:no-underline"
            >Finance</a
          >
          <a
            :href="[
              is_industries
                ? '/industries#entertainment_software'
                : '/industries',
            ]"
            v-scroll-to="'#entertainment_software'"
            onclick="x_goto(event)"
            class="sub_list_item relative hover:bg-blue-200 py-3 px-5 text-left hover:pointer no-underline hover:no-underline"
            >Entertainment</a
          >
        </div>
        <a
          href="/services"
          class="list_item hidden md:flex text-base mx-1 rounded-sm hover:bg-blue-100 px-3 justify-center text-center items-center list_item relative no-underline hover:no-underline font-bold hover:pointer"
          >Services</a
        >
        <a
          href="/contact"
          class="list_item hidden md:flex text-base mx-1 rounded-sm hover:bg-blue-100 px-3 justify-center text-center items-center list_item relative no-underline hover:no-underline font-bold hover:pointer"
          >Contact Us</a
        >
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Topper",
  props: ["is_industries", "top_relative"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "/css/topper.css",
      },
    ],
    script: [{ src: "/js/mod_scroll.js" }],
  },
  data() {
    return {
      hide: false,
      nav_pc_hide: true,
      nav_mb_hide: true,
      sub_nav_mb_hide: true,
    };
  },
  methods: {},
  mounted() {},
  beforeMount() {},
};
</script>
