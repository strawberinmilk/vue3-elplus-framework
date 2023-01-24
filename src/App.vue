<template>
  <el-page-header :id="$style.header" :icon="null">
    <template #title>
      <router-link to="/">
        <span>ページタイトル</span>
      </router-link>
    </template>
    <template #icon>
      <div :id="$style.headerHeight"></div>
    </template>
    <template #content>
      <span> コンテンツ1 </span>
      <span> コンテンツ2 </span>
      <span> コンテンツ3 </span>
    </template>
    <template #extra>
      <span>右側</span>
    </template>
  </el-page-header>
  <div :id="$style.headerHeightKeep"></div>
  <div id="progressAppGsap" :class="$style.progress"></div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  name: 'App',
  mounted() {
    gsap.set('#progressAppGsap', {
      width: '0%',
    });
    gsap.to('#progressAppGsap', {
      width: '100%',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        scrub: true,
        markers: true,
      },
    });
  },
});
</script>

<style lang="scss" module>
@use '@/constants/constants.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#header {
  color: #ffffff;
  background-color: #ff00ff;
  position: fixed;
  width: 100%;
  top: 0px;
  #headerHeight {
    height: constants.$HEADER_HEIGHT;
    width: 0px;
    /*headerは一番heightの大きいもののサイズで上下中央寄せされるよ*/
  }
}
#headerHeightKeep {
  height: constants.$HEADER_HEIGHT;
}

.progress {
  position: fixed;
  top: constants.$HEADER_HEIGHT;
  height: 10px;
  background-color: #ffffff;
}
</style>
