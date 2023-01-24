<template>
  <div :id="$style.parent">
    これは{{ props.msg }}枚目のページです
    <el-row>
      <el-col :span="8">el</el-col>
      <el-col :span="8">row</el-col>
      <el-col :span="8">col</el-col>
      <p>使えてるね</p>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestComponent',
  props: {
    msg: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" module>
@use '@/constants/constants.scss';
#parent {
  height: calc(100% - constants.$HEADER_HEIGHT - constants.$PROGRESS_HEIGHT);
  width: 100%;
  background-color: lime;
}
</style>
