<template>
  <div id="parent">
    <div style="background-color: aqua; height: 500px">
      <h1>Hello World</h1>
      <p>こんにちは的なこと書くエリア</p>
      <p>いきなりスクロール依存は怖いからね</p>
    </div>
    <h1>Hello World</h1>
    <TestComponent class="animation" msg="1" />
    <TestComponent class="animation" msg="2" />
    <TestComponent class="animation" msg="3" />
    <TestComponent class="animation" msg="4" />
    <div class="trigger"></div>
    <div class="trigger"></div>
    <div class="trigger"></div>
    <div class="trigger" style="background-color: aqua">last trigger</div>
  </div>
  <div style="height: 500px"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestComponent from "@/components/TestComponent.vue"; // @ is an alias to /src
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "HomeView",
  components: {
    TestComponent,
  },
  mounted() {
    const triggers: any[] = gsap.utils.toArray(".trigger"); //document.querySelectorAll(".blank");
    const animations: any[] = gsap.utils.toArray(".animation"); //document.querySelectorAll(".animation");
    for (const i in triggers) {
      gsap.set(animations[i], {
        x: 1000,
        y: -100,
        opacity: 1,
        rotate: -60,
      });
      gsap.to(animations[i], {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: triggers[i], //アニメーションが始まるトリガーとなる要素
          start: "top center", //アニメーションが始まる位置
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          // scrub: true,
          markers: true,
        },
      });
    }
  },
});
</script>

<style>
body {
  background-color: magenta;
}
.animation {
  position: fixed;
  top: calc(50% - 100px / 2);
  left: calc(50% - 300px / 2);
}
.trigger {
  height: 200px;
}
</style>
