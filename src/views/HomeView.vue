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
import { defineComponent } from 'vue';
import TestComponent from '@/components/TestComponent.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'HomeView',
  components: {
    TestComponent,
  },
  mounted() {
    const triggers: any[] = gsap.utils.toArray('.trigger'); // eslint-disable-line
    const animations: any[] = gsap.utils.toArray('.animation'); // eslint-disable-line
    for (const i in triggers) {
      gsap.set(animations[i], {
        x: window.outerWidth * (Number(i) % 2 ? 1 : -1),
        y: 0,
        opacity: 1,
        rotate: -90,
      });
      gsap.to(animations[i], {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: triggers[i],
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
          // scrub: true,
          markers: true,
        },
      });
    }
  },
});
</script>

<style lang="scss">
@use '@/constants/constants.scss';
body {
  background-color: #cccccc;
}
.animation {
  position: fixed;
  top: calc(constants.$HEADER_HEIGHT + constants.$PROGRESS_HEIGHT);
  left: 0;
  margin: 0;
}
.trigger {
  margin: 0;
  height: 500px;
}
</style>
