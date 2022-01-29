<template>
  <!-- :class="{ 'mb-20 -top-1': !no_b_margin }" -->
  <aside
    id="apply"
    class="overflow-hidden relative ubuntu flex flex-col w-screen bg-white mb-0 text-black m-0"
  >
    <div
      class="w-full pt-10 pb-5 text-black text-bold text-4xl text-center relative z-20"
    >
      Apply
    </div>
    <div class="mx-auto g-gray-100 w-11/12 max-w-xl flex flex-col">
      <p class="text-gray-500 block text-center py-3">
        If you are looking for a career growth opportunity and the next step
        toward success, 01 technologies is the right place for you!
      </p>
      <p class="text-gray-500 block text-center py-3 relative">
        Apply to
        <a
          class="no-underline hover:no-underline"
          href="mailto:career@01technologies.co"
        >
          <span class="xline"> career@01technologies.com </span>
        </a>
        now and become a technologist! <br />
        <button class="mt-7 mx-auto xapply mx-auto block">
          <!-- on pc -->
          <a
            class="sm:block hidden text-bold no-underline hover:no-underline"
            href="mailto:career@01technologies.co"
            >Apply</a
          >
          <!-- on mobile -->
          <a
            class="block sm:hidden text-bold no-underline hover:no-underline"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=career@01technologies.co"
            target="_blank"
            >Apply</a
          >
        </button>
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Apply",
  props: ["no_b_margin"],
};
</script>
