<template>
  <aside
    id="bottom"
    class="relative bg-gray-900 text-white ubuntu flex flex-col w-screen mb-0 text-black m-0"
  >
    <!-- need a solution box -->
    <div
      :class="[no_talk_to_us ? 'hidden' : 'flex']"
      class="block p-5 flex-col items-center justify-center"
    >
      <div class="text-2xl text-bold w-4/5 max-w-md text-center">
        Need a solution with very specific technology?
      </div>
      <div class="block pt-4 w-4/5 max-w-md text-center">
        Our experts are happy to share their tech knowledge with you
      </div>
      <button class="mt-7 mx-auto xapply mx-auto block">
        <nuxt-link
          class="text-bold no-underline hover:no-underline"
          to="/contact"
          >Talk To Us</nuxt-link
        >
      </button>
    </div>

    <!-- contact link box -->
    <div
      class="xlinks w-full block h-auto flex flex-col justify-center items-center p-3"
    >
      <div class="flex h-8 justify-evenly mb-2">
        <!-- instagram -->
        <a
          href="https://instagram.com/01.technologies?utm_medium=copy_link"
          target="_blank"
          class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
        >
          <img class="w-8 block" src="/img/instagram.png" alt="" />
        </a>
        <!-- linkedin -->
        <!-- href="https://www.linkedin.com" -->
        <a
          href="/"
          target="_blank"
          class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
        >
          <img class="w-8 block" src="/img/linkedin.png" alt="" />
        </a>
      </div>

      <!-- https://wa.me/2348012345678 -->
      <a
        href="https://wa.me/2347066893835"
        target="_blank"
        class="no-underline hover:no-underline rounded-xl bg-gray-700 bg-opacity-10 my-1 text-xs p-2 flex flex-wrap relative"
      >
        <img
          class="w-6 block pr-2 rounded-xl self-start mb-auto"
          src="/img/whatsapp.png"
          alt=""
        />
        <span> +234 706 689 3835 </span>
      </a>
      <!-- on pc -->
      <a
        href="mailto:hello@01technologies.co"
        target="_blank"
        class="sm:flex hidden no-underline hover:no-underline rounded-xl bg-gray-700 bg-opacity-10 my-1 text-xs p-2 flex-wrap relative"
      >
        <img
          class="w-6 block pr-2 rounded-xl self-start mb-auto"
          src="/img/email.png"
          alt=""
        />
        <span> hello@01technologies.co</span>
      </a>
      <!-- on mobile -->
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@01technologies.co"
        target="_blank"
        class="sm:hidden flex no-underline hover:no-underline rounded-xl bg-gray-700 bg-opacity-10 my-1 text-xs p-2 flex-wrap relative"
      >
        <img
          class="w-6 block pr-2 rounded-xl self-start mb-auto"
          src="/img/email.png"
          alt=""
        />
        <span> hello@01technologies.co</span>
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Africa+Re+House%2C+Plot+169+Karimu+Kotun+Street%2C+Victoria+Island%2C+101241%2C+Lagos%2C+Nigeria"
        target="_blank"
        class="no-underline hover:no-underline rounded-xl bg-gray-700 bg-opacity-10 my-1 text-xs p-2 flex flex-row relative max-w-xs"
      >
        <img
          class="w-6 block pr-2 rounded-xl self-start mb-auto"
          src="/img/location.png"
          alt=""
        />
        <div class="relative bg-red">
          3rd Floor, Africa Re House, Plot 169 Karimu Kotun St, Victoria Island
          101241, Lagos, Nigeria
          <span class="shrinkx text-bold absolute inline-block ubuntu my-auto"
            >NG</span
          >
        </div>
      </a>
      <!-- <a
        href="https://www.google.com/maps/search/?api=1&query=Africa+Re+House%2C+Plot+169+Karimu+Kotun+Street%2C+Victoria+Island%2C+101241%2C+Lagos%2C+Nigeria"
        target="_blank"
        class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
      >
        <img class="w-8 block" src="/img/location.png" alt="" />
      </a>
      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
      >
        <img class="w-8 block" src="/img/whatsapp.png" alt="" />
      </a>
      <a
        href="mailto:hello@01technologies.co"
        target="_blank"
        class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
      >
        <img class="w-8 block" src="/img/email.png" alt="" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        class="w-8 h-8 no-underline hover:no-underline rounded-xl bg-gray-100 bg-opacity-10 mx-2 p-2 flex relative"
      >
        <img class="w-8 block" src="/img/instagram.png" alt="" />
      </a> -->
    </div>

    <!-- copyrights -->
    <div class="w-full text-center text-sm py-3 text-gray-500">
      &copy; 01Technologies, 2022
    </div>
  </aside>
</template>

<script>
export default {
  name: "Bottom",
  props: ["no_talk_to_us"],
};
</script>
