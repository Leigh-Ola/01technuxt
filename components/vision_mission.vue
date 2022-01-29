<template>
  <aside
    id="vision_mission"
    class="xbg-blue-theme pb-5 overflow-hidden -top-2 relative ubuntu block w-screen m-0"
  >
    <div
      class="relative w-screen justify-center align-center flex flex-col p-10"
    >
      <div
        class="flex my-0.5 sm:my-5 w-11/12 mt-16 sm:mt-12 sm:overflow-hidden sm-flex-grow flex-col sm:flex-row"
      >
        <img class="flex-shrink-0 w-1/2" src="/img/vision.svg" alt="" />
        <div
          class="xtx-cont py-5 flex flex-col px-5 justify-center text-white min-h-48 w-1/2 sm:px-0 m-auto"
        >
          <span
            class="xdivide-bottom sm:py-3 text-center relative pb-5 text-4xl mx-auto text-bold"
            >Our Vision</span
          >
          <span class="text-lg text-center pt-5 px-3 mx-auto"
            >Empower every business with uniquely tailored software</span
          >
        </div>
      </div>
      <div
        class="flex my-0.5 sm:my-5 w-11/12 mt-16 sm:mt-12 sm:overflow-hidden sm-flex-grow flex-col sm:flex-row"
      >
        <img
          class="sm:order-2 w-1/2 static flex-shrink-0"
          src="/img/mission.png"
          alt=""
        />
        <div
          class="xtx-cont order-1 py-5 flex flex-col px-5 justify-center text-white min-h-48 w-1/2 sm:px-0 m-auto"
        >
          <span
            class="xdivide-bottom sm:py-3 text-center relative pb-5 text-4xl mx-auto text-bold"
            >Our Mission</span
          >
          <span class="text-lg text-center pt-5 px-3 mx-auto"
            >Be a trusted technology partner in business process
            automation</span
          >
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "VisionMission",
};
</script>
