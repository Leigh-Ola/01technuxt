<template>
  <main
    id="main"
    class="is-boxed has-animations is-loaded"
    cz-shortcut-listen="true"
    style="height: 100%"
  >
    <topper :top_relative="true"></topper>
    <div class="mt-12 sm:mt-0 body-wrap boxed-container">
      <header class="site-header" style="display: none !important">
        <div class="container">
          <div class="site-header-inner flex relative">
            <div class="brand header-brand relative top-20">
              <h1 class="m-0">
                <a href="#">
                  <img
                    class="header-logo-image asset-light"
                    src="https://preview.cruip.com/switch/dist/images/logo-light.svg"
                    alt="Logo"
                  />
                  <img
                    class="header-logo-image asset-dark"
                    src="https://preview.cruip.com/switch/dist/images/logo-dark.svg"
                    alt="Logo"
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">01 Technologies</h1>
                <p class="hero-paragraph">
                  Custom software and web app solutions for you and your
                  enterprise
                </p>
                <!-- <div class="hero-cta">
                  <a class="button button-primary" href="#">Buy it now</a>
                  <div class="lights-toggle">
                    <input
                      id="lights-toggle"
                      type="checkbox"
                      name="lights-toggle"
                      class="switch"
                      checked="checked"
                    />
                    <label for="lights-toggle" class="text-xs"
                      ><span
                        >Turn me <span class="label-text">dark</span></span
                      ></label
                    >
                  </div>
                </div> -->
              </div>
              <div class="hero-media">
                <div class="header-illustration">
                  <img
                    class="header-illustration-image asset-light"
                    src="https://preview.cruip.com/switch/dist/images/header-illustration-light.svg"
                    alt="Header illustration"
                  />
                  <img
                    class="header-illustration-image asset-dark"
                    src="https://preview.cruip.com/switch/dist/images/header-illustration-dark.svg"
                    alt="Header illustration"
                  />
                </div>
                <div class="hero-media-illustration">
                  <img
                    class="hero-media-illustration-image asset-light"
                    src="https://preview.cruip.com/switch/dist/images/hero-media-illustration-light.svg"
                    alt="Hero media illustration"
                  />
                  <img
                    class="hero-media-illustration-image asset-dark"
                    src="https://preview.cruip.com/switch/dist/images/hero-media-illustration-dark.svg"
                    alt="Hero media illustration"
                  />
                </div>
                <div class="hero-media-container">
                  <img
                    class="hero-media-image asset-light first opaqueBgImg"
                    src="/img/bigPhone.png"
                    alt="Hero media"
                  />
                  <img
                    class="hero-media-image asset-dark"
                    src="https://preview.cruip.com/switch/dist/images/hero-media-dark.svg"
                    alt="Hero media"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <div
              class="features-inner section-inner"
              style="padding-bottom: 0px"
            >
              <div class="features-header text-center">
                <div class="container-sm">
                  <div
                    class="w-full h-10 text-black text-bold text-2xl text-center relative z-20"
                  >
                    What We Do
                  </div>

                  <h2 class="section-title mt-0"></h2>
                  <p class="section-paragraph">
                    At 01 technologies we work with you as true partners to
                    understand your business processes and build software
                    solutions tailored to your specific needs.
                  </p>
                  <p class="section-paragraph">
                    We make sure that the solutions we provide are perfectly
                    matched to your preferences, as well as long-term and
                    short-term business goals.
                  </p>
                  <p class="section-paragraph">
                    Providing quality solutions and services is our backbone.
                  </p>
                  <div class="features-image">
                    <img
                      class="features-illustration asset-dark"
                      src="https://preview.cruip.com/switch/dist/images/features-illustration-dark.svg"
                      alt="Feature illustration"
                    />
                    <img
                      class="features-box asset-dark"
                      src="https://preview.cruip.com/switch/dist/images/features-box-dark.svg"
                      alt="Feature box"
                    />
                    <img
                      class="features-illustration asset-dark"
                      src="https://preview.cruip.com/switch/dist/images/features-illustration-top-dark.svg"
                      alt="Feature illustration top"
                    />
                    <img
                      class="features-illustration asset-light"
                      src="https://preview.cruip.com/switch/dist/images/features-illustration-light.svg"
                      alt="Feature illustration"
                    />
                    <!-- src="https://preview.cruip.com/switch/dist/images/features-box-light.svg" -->
                    <img
                      class="features-box asset-light"
                      src="https://preview.cruip.com/switch/dist/images/features-box-light.svg"
                      alt="Feature box"
                    />
                    <img
                      class="features-illustration asset-light second opaqueBgImg"
                      src="/img/helping.png"
                      alt="Feature illustration top"
                    />
                  </div>
                </div>
              </div>

              <!-- <div class="features-wrap">
                <div
                  class="feature is-revealing"
                  :style="{ opacity: 'isShowTime? 1 : 0' }"
                  style="
                    visibility: visible;
                    transform: matrix3d(
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      20,
                      0,
                      0,
                      1
                    );
                  "
                  data-sr-id="0"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        class="asset-light"
                        src="https://preview.cruip.com/switch/dist/images/feature-01-light.svg"
                        alt="Feature 01"
                      />
                      <img
                        class="asset-dark"
                        src="https://preview.cruip.com/switch/dist/images/feature-01-dark.svg"
                        alt="Feature 01"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="feature-title mt-0">Discover</h3>
                      <p class="text-sm mb-0">
                        Lorem ipsum dolor sit amet, consecte adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="feature is-revealing"
                  :style="{ opacity: 'isShowTime? 1 : 0' }"
                  style="
                    visibility: visible;
                    transform: matrix3d(
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      20,
                      0,
                      0,
                      1
                    );
                  "
                  data-sr-id="2"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        class="asset-light"
                        src="https://preview.cruip.com/switch/dist/images/feature-02-light.svg"
                        alt="Feature 02"
                      />
                      <img
                        class="asset-dark"
                        src="https://preview.cruip.com/switch/dist/images/feature-02-dark.svg"
                        alt="Feature 02"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="feature-title mt-0">Discover</h3>
                      <p class="text-sm mb-0">
                        Lorem ipsum dolor sit amet, consecte adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua dui.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="feature is-revealing"
                  :style="{ opacity: 'isShowTime? 1 : 0' }"
                  style="
                    visibility: visible;
                    transform: matrix3d(
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      20,
                      0,
                      0,
                      1
                    );
                  "
                  data-sr-id="3"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        class="asset-light"
                        src="https://preview.cruip.com/switch/dist/images/feature-03-light.svg"
                        alt="Feature 03"
                      />
                      <img
                        class="asset-dark"
                        src="https://preview.cruip.com/switch/dist/images/feature-03-dark.svg"
                        alt="Feature 03"
                      />
                    </div>
                    <div class="feature-content">
                      <h3 class="feature-title mt-0">Discover</h3>
                      <p class="text-sm mb-0">
                        Lorem ipsum dolor sit amet, consecte adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <most-popular></most-popular>
          <vision-mission></vision-mission>
          <values></values>
          <our-clients></our-clients>
          <why-us></why-us>
          <industries></industries>
          <how-we-help></how-we-help>
          <apply></apply>
          <bottom></bottom>
        </section>

        <!-- <section class="cta section">
          <div class="container-sm">
            <div class="cta-inner section-inner">
              <div class="cta-header text-center">
                <h2 class="section-title mt-0">Get it and Switch</h2>
                <p class="section-paragraph">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
                <div class="cta-cta">
                  <a class="button button-primary" href="#">Buy it now</a>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </main>
    </div>
  </main>
</template>

<style scoped>
body {
  font-family: OpenSans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
/* styles */
*.quicksand {
  font-family: Quicksand, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
*.opensans {
  font-family: OpenSans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
*.comfortaa {
  font-family: Comfortaa, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
*.roboto {
  font-family: Roboto, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
*.ubuntu {
  font-family: Ubuntu, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script>
import MostPopular from "~/components/most_popular.vue";
import VisionMission from "~/components/vision_mission.vue";
import Values from "~/components/values.vue";
import WhyUs from "~/components/why_us.vue";
import HowWeHelp from "~/components/how_we_help.vue";
import Industries from "~/components/industries.vue";
import OurClients from "~/components/our_clients.vue";
import Apply from "~/components/apply.vue";
import Bottom from "~/components/bottom.vue";
import Topper from "~/components/topper.vue";

export default {
  components: {
    topper: Topper,
    "most-popular": MostPopular,
    "vision-mission": VisionMission,
    values: Values,
    "why-us": WhyUs,
    values: Values,
    "how-we-help": HowWeHelp,
    industries: Industries,
    "our-clients": OurClients,
    apply: Apply,
    bottom: Bottom,
  },

  head: {
    title: "01 Technologies | Home",
    script: [
      { src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" },
      { src: "/js/stolen_intro.js" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600",
      },
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
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "At 01Technologies, we build custom software and web-app solutions tailored to your specific needs.",
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
  },
  data() {
    return {
      isShowTime: false,
    };
  },
  beforeMount() {},
  mounted() {
    let dis = this;
    setTimeout(() => {
      dis.isShowTime = true;
    }, 5000);
  },
};
</script>
