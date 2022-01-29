<template>
  <aside
    id="industries"
    class="overflow-hidden rounded-lg bg-blue-100 relative w-5/6 py-10 flex-shrink-0 flex-grow-0 ubuntu block -top-1 mt-5 mx-auto"
  >
    <div class="px-3 text-black text-center text-2xl z-10 relative">
      Serving The Largest Industries And Beyond
    </div>
    <div
      class="comfortaa flex flex-col sm:flex-row justify-evenly items-center p-3 mt-5"
    >
      <nuxt-link
        class="hover:bg-blue-200 rounded-xl min-w-min w-3/5 sm:w-24 hover:no-underline no-underline text-black p-3 m-auto flex flex-col justify-evenly items-center"
        to="/industries"
      >
        <img
          class="pt-3 w-24 sm:w-10 block flex-shrink-0"
          src="/img/legal.png"
          alt=""
        />
        <span class="text-xs pt-3">LEGAL</span>
      </nuxt-link>
      <nuxt-link
        class="hover:bg-blue-200 rounded-xl min-w-min w-3/5 sm:w-24 hover:no-underline no-underline text-black p-3 m-auto flex flex-col justify-evenly items-center"
        to="/industries"
      >
        <img
          class="pt-3 w-24 sm:w-10 block flex-shrink-0"
          src="/img/healthcare.png"
          alt=""
        />
        <span class="text-xs pt-3">HEALTHCARE</span>
      </nuxt-link>
      <nuxt-link
        class="hover:bg-blue-200 rounded-xl min-w-min w-3/5 sm:w-24 hover:no-underline no-underline text-black p-3 m-auto flex flex-col justify-evenly items-center"
        to="/industries"
      >
        <img
          class="pt-3 w-24 sm:w-10 block flex-shrink-0"
          src="/img/finance.png"
          alt=""
        />
        <span class="text-xs pt-3">FINANCE</span>
      </nuxt-link>
      <nuxt-link
        class="hover:bg-blue-200 rounded-xl min-w-min w-3/5 sm:w-24 hover:no-underline no-underline text-black p-3 m-auto flex flex-col justify-evenly items-center"
        to="/industries"
      >
        <img
          class="pt-3 w-24 sm:w-10 block flex-shrink-0"
          src="/img/entertainment.png"
          alt=""
        />
        <span class="text-xs pt-3">ENTERTAINMENT</span>
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "MostPopular",
};
</script>
