console.log("Hello world");

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello there!",
    };
  },
}).mount("#app");
