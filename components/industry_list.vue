<template>
  <div
    class="industry_list overflow-hidden box-border relative ubuntu block w-screen max-w-full mt-5 mb-2"
  >
    <div
      :id="id"
      :class="{ 'font-bold text-lg mb-3 comfortaa': bold }"
      class="block"
    >
      {{ name }}
    </div>
    <div class="list_container relative block pl-5 mb-3">
      <slot></slot>
    </div>
    <!-- <slot name="sub"></slot> -->
  </div>
</template>

<script>
export default {
  name: "IndustryList",
  props: ["name", "id", "bold"],
  data() {
    return {};
  },
};
</script>
