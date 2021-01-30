<template>
  <div class="hotel-card">
    <div class="hotel-card__title">{{ title }}</div>
    <div class="hotel-card__txt">{{ txt }}</div>
    <div class="hotel-card__price">{{ price }}₽</div>
    <VButton title="Забронировать" :onClick="handleClick" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VButton from "@/components/VButton.vue";

@Component({
  name: "HotelCard",
  components: { VButton }
})
export default class HotelCard extends Vue {
  @Prop() title!: string;
  @Prop() txt!: string;
  @Prop() price!: string;

  handleClick() {
    this.$emit("openModal");
  }
}
</script>

<style lang="less" scoped>
.hotel-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.09);
  &__title {
    font-size: 24px;
    flex-grow: 1;
  }
  &__txt {
    font-size: 18px;
  }
  &__price {
    font-size: 18px;
  }
}
</style>
