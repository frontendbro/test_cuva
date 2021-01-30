<template>
  <button
    @click="onClick"
    class="button"
    :style="{ backgroundColor: bgColor, color: color }"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Button"
})
export default class Button extends Vue {
  @Prop({ default: "Кнопка" }) title!: string;
  @Prop({ default: "#2b70f3" }) bgColor!: string;
  @Prop({ default: "#fff" }) color!: string;
  @Prop() onClick!: () => {};
}
</script>

<style lang="less" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0;
  height: 40px;
  padding: 0 20px;
  outline: none;
  cursor: pointer;
}
</style>
