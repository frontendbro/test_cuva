<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="modal-layout"
      :class="{
        background: isBackground
      }"
    >
      <div
        ref="modal"
        v-click-outside="{
          handler: clickAway,
          events: ['mousedown']
        }"
        class="modal"
        :class="{
          'full-page': isFullPage,
          'content-center': isContentCenter
        }"
        @keydown.esc="closeModal"
      >
        <div class="modal-header">
          <slot name="title" />
          <Icon name="close" @click="closeModal" class="modal-header__close" />
        </div>
        <div ref="body" class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Icon from "@/components/Icon/Icon.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  components: { Icon }
})
export default class Modal extends Vue {
  @Prop() description!: string;
  @Prop() isOpen!: boolean;
  @Prop({ default: true }) isClickAwayClose!: boolean;
  @Prop() isBackground!: boolean;
  @Prop() isFullPage!: boolean;
  @Prop() isContentCenter!: boolean;

  $refs!: {
    modal: HTMLDivElement;
  };

  @Watch("isOpen")
  openChange(val: boolean) {
    this.$nextTick(() => {
      if (this.$refs.modal && val) {
        disableBodyScroll(this.$refs.modal);
      } else {
        clearAllBodyScrollLocks();
      }
    });
  }

  clickAway() {
    if (this.isClickAwayClose) this.closeModal();
  }
  closeModal() {
    this.$emit("close");
  }
}
</script>

<style lang="less" scoped>
.modal-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100%;
}
.modal {
  position: relative;
  box-sizing: border-box;
  width: 630px;
  padding: 50px 40px 40px;
  overflow-y: scroll;
  border-radius: 8px;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.09);
  background-color: #333333;
  @media (max-width: 800px) {
    height: 100%;
  }
  &-header {
    position: relative;
    display: flex;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    &__close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
      cursor: pointer;
      fill: #fff;
    }
  }
  &-body {
    width: 100%;
    height: 100%;
    text-align: left;
  }
}
</style>
