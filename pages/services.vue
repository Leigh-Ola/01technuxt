<template>
  <aside
    id="services_page"
    class="overflow-hidden relative ubuntu block w-screen max-w-full bg-white m-0"
  >
    <topper></topper>
    <!-- <nuxt-link class="no-underline hover:no-underline" to="/">
      <img
        class="relative w-40 mx-auto top-2 left-2"
        src="/img/01tech_logo.png"
        alt=""
      />
    </nuxt-link> -->
    <div class="font-bold pt-7 text-black text-center text-2xl z-10 relative">
      Most Popular Services
    </div>
    <!-- <span class="block my-5 px-2 text-black text-center text-base z-10 relative"
      >Here are our services</span
    > -->
    <div
      class="h-min py-6 max-w-3xl sm:max-w-3xl flex justify-between mx-auto flex-col sm:flex-row justify-center sm:flex-wrap items-center z-10 relative"
    >
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
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
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 max-h-40 items-center flex-shrink py-2 px-4 flex rounded-sm bg-white flex-shrink flex-col justify-start"
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
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 max-h-min items-center flex-shrink py-2 px-4 flex rounded-sm bg-white flex-shrink flex-col justify-start"
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
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Technology Consulting</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >We help your company on how to best use Information Technology (IT)
          practices to achieve your business objectives.
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/consulting.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >ETL</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >The process of extracting data from source systems and bringing it
          into the data warehouse is commonly called ETL that stands for
          extraction, transformation, and loading.
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/etl.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Hardware Setup</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >We configure network workstations, your server, and your phone system
          for you and your enterprise. We can help you find the right PC; get it
          connected and make it ready for work
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/hardware.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Data Migration</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >01 technologies Data Migration service is designed for highly
          confidential, large, sensitive, mission-critical systems and
          databases. We can help your enterprise migrate all your essential and
          compulsory data with no harm to it
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/migration.png"
          alt=""
        />
      </div>
      <div
        class="relative w-10/12 sm:w-1/3 mx-auto sm:mx-auto my-8 items-center flex-shrink py-2 px-4 flex rounded-sm flex-shrink flex-col justify-start"
        style="background: rgba(256, 256, 256, 0.3)"
      >
        <span
          class="text-bold z-10 text-lg pb-3 min-w-min text-black p-0 mx-auto"
          >Blockchain Development</span
        >
        <span
          class="z-10 relative min-w-min mx-auto text-xs text-center text-black"
          >Creating, launching and managing of blockchain services such as smart
          contracts, wallets, supply chains and dApps
        </span>
        <img
          class="absolute z-0 w-10 bottom-full mx-auto opacity-80"
          src="/img/blockchain.png"
          alt=""
        />
      </div>
    </div>
    <!-- <bottom :no_talk_to_us="true"></bottom> -->
    <bottom></bottom>
  </aside>
</template>

<script>
import Bottom from "~/components/bottom.vue";
import Topper from "~/components/topper.vue";

export default {
  title: "Services",
  components: {
    bottom: Bottom,
    topper: Topper,
  },

  head: {
    title: "01  Technologies | Services",
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/stolen_intro.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/stolen_intro_mods.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/fonts.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/added.css",
      },
    ],
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Our range of services include Custom Software Development, Web Development, Mobile Development, Techmology Consulting, Hardware Setup, Data Migration, Blockchain Development and Cyber Security",
    },
    {
      hid: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      content: "IE=edge",
      hid: "X-UA-Compatible",
      name: "X-UA-Compatible",
    },
  ],
};
</script>
