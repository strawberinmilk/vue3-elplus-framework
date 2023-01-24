<template>
  <div :id="$style.parent">
    {{ props.msg }}
    <p>pppppppppppppppppppppppppppppppp</p>
    <p>pppppppppppppppppppppppppppppppp</p>
    <p>pppppppppppppppppppppppppppppppp</p>
    <p>pppppppppppppppppppppppppppppppp</p>
    <p>pppppppppppppppppppppppppppppppp</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestComponent",
  props: {
    msg: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" module>
#parent {
  height: 100px;
  width: 300px;
  background-color: lime;
}
</style>
