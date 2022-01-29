<template>
  <main id="contact" class="max-w-full overflow-hidden">
    <topper></topper>
    <div class="font-bold pt-7 text-black text-center text-2xl z-10 relative">
      Contact Us
    </div>
    <div class="w-full max-w-screen p-5">
      <div class="flex flex-col max-w-full">
        <div class="w-96 max-w-full flex flex-col mx-auto">
          <input
            type="text"
            id="x_name"
            v-model="name"
            placeholder="Name"
            class="p-4 my-3 mx-auto w-full border rounded-xl border-black border-solid"
          />
          <input
            type="email"
            id="x_email"
            v-model="email"
            placeholder="Email"
            class="p-4 my-3 mx-auto w-full border rounded-xl border-black border-solid"
          />
          <input
            type="tel"
            id="x_tel"
            v-model="tel"
            placeholder="Phone Number"
            class="p-4 my-3 mx-auto w-full border rounded-xl border-black border-solid"
          />
          <textarea
            id="x_message"
            v-model="msg"
            placeholder="Talk To Us"
            class="p-4 my-3 mx-auto w-full border rounded-xl border-black border-solid"
            cols="auto"
            rows="7"
          ></textarea>
        </div>
        <!-- success -->
        <div
          v-if="state == 'success'"
          class="min-w-screen text-center font-bold text-blue-900"
        >
          MESSAGE SENT
        </div>
        <!-- failure -->
        <div
          v-if="state == 'failure'"
          class="min-w-screen text-center font-bold text-red-900 px-3"
        >
          AN ERROR OCCURED. <br />
          PLEASE TRY AGAIN.
        </div>
        <!-- sending -->
        <div
          v-if="state == 'loading'"
          class="relative w-full flex flex-col justify-center items-center"
        >
          <div class="min-w-screen pb-2 text-center text-blue-900 font-bold">
            SENDING
          </div>
          <div class="relative w-full flex justify-center items-center">
            <span
              class="xdot mx-1 h-1 w-1 relative block bg-blue-900 rounded-full"
            ></span>
            <span
              class="xdot mx-1 h-1 w-1 relative block bg-blue-900 rounded-full"
            ></span>
            <span
              class="xdot mx-1 h-1 w-1 relative block bg-blue-900 rounded-full"
            ></span>
          </div>
        </div>
        <div class="flex h-12 w-96 mx-auto my-5">
          <button
            @click="submit"
            class="h-full text-white text-bold w-40 rounded-xl mr-auto active:bg-blue-800 bg-blue-600"
          >
            Send Message
          </button>
        </div>
        <!-- name, email, phone, message,, send message -->
      </div>
    </div>
    <bottom></bottom>
  </main>
</template>

<script>
import axios from "axios";
import Bottom from "~/components/bottom.vue";
import Topper from "~/components/topper.vue";
var context = undefined;

export default {
  components: {
    topper: Topper,
    bottom: Bottom,
  },

  head: {
    title: "01 Technologies | Contact",
    script: [],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/contact.css",
      },
    ],
  },
  data() {
    return {
      email: "",
      tel: "",
      name: "",
      msg: "",
      state: "none",
    };
  },
  mounted() {
    context = this;
    // console.log("Base url", this.$config.BASE_URL);
  },
  watch: {
    msg: (curr, prev) => {
      //   console.log(`${x}; ${y}; ${z}`);
    },
  },
  methods: {
    submit: () => {
      context.state = "loading";
      const baseURL = "http://localhost:8080"; // this.$config.BASE_URL;
      let { email, tel, name, msg } = context;
      let data = { email, tel, name, msg };
      // .get(baseURL + "/api/send", { params: data })
      axios
        .get("/api/send", { params: data })
        .then((res) => {
          console.log("Success");
          console.log(res);
          console.log(res.data);
          context.state = "success";
        })
        .catch((err) => {
          console.log("Error");
          console.log(err);
          context.state = "failure";
        });
    },
  },
};
</script>
