<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="getDataSvg.viewBox"
    v-on="$listeners"
  >
    <path fill="inherit" fill-rule="evenodd" :d="getDataSvg.d" />
  </svg>
</template>
<script lang="ts">
import mapIcon from "./mapIcons";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Icon"
})
export default class Icon extends Vue {
  @Prop() name!: string;
  @Prop({ default: 16 }) width!: number;
  @Prop({ default: 16 }) height!: number;

  get getDataSvg() {
    return mapIcon[this.name];
  }
}
</script>
