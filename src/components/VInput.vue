<template>
  <div
    class="v-input-container"
    :class="{
      'v-input-container_error': isError,
      'v-input-container_disabled': disabled
    }"
    @click="focusInput"
  >
    <label class="v-input-label">
      {{ label }}
      <input
        ref="input"
        v-model="valueInput"
        v-bind="$attrs"
        class="v-input"
        @keyup.enter="$emit('press', $event)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "VInput"
})
export default class VInput extends Vue {
  @Prop() isError!: boolean;
  @Prop() disabled!: boolean;
  @Prop() value!: string;
  @Prop() label!: string;

  $refs!: {
    input: HTMLInputElement;
  };

  get valueInput(): string {
    return this.value;
  }
  set valueInput(value: string) {
    this.$emit("input", value);
  }

  focusInput() {
    this.$refs.input.focus();
  }
}
</script>

<style lang="less" scoped>
.v-input-container {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  overflow: hidden;
  padding: 0 20px;
  background: #f7f7f7;
  border: 1px transparent solid;
  border-radius: 8px;
  transition: 0.2s;
  text-align: left;
  &_error {
    border: 1px red solid;
    .v-input {
      color: red;
    }
    .v-input-label {
      color: red;
    }
  }
  &_disabled {
    background: rgba(#606060, 0.1);
    pointer-events: none;
    .v-input {
      color: #606060;
    }
  }
}

.v-input {
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
}

.v-input-label {
  width: 100%;
  color: #606060;
  font-size: 12px;
}
</style>
