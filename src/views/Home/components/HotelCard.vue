<template>
  <div
    class="hotel-card"
    :style="{ background: `url(${imgPath}) no-repeat center` }"
  >
    <div class="hotel-card__title">{{ title }}</div>
    <div class="hotel-card__txt">{{ txt }}</div>
    <div class="hotel-card__price">{{ price }}₽</div>
    <VButton
      class="hotel-card__btn"
      title="Забронировать"
      :onClick="handleClick"
    />
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
  @Prop() imageUrl!: string;

  get imgPath() {
    return require(`@/assets/${this.imageUrl}`);
  }

  handleClick() {
    this.$emit("openModal");
  }
}
</script>

<style lang="less" scoped>
.hotel-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background-size: cover;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  &__title {
    font-size: 24px;
    box-sizing: border-box;
    margin-bottom: 120px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 8px;
  }
  &__txt {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    text-align: left;
    flex-grow: 1;
    margin-bottom: 20px;
  }
  &__price {
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 8px;
  }
  &__btn {
    align-self: center;
  }
}
</style>
