<template>
  <div class="home">
    <HotelCard
      v-for="hotel of hotelsList"
      :key="hotel.id"
      :title="hotel.name"
      :txt="hotel.description"
      :price="hotel.price"
      @openModal="handleOpenModal(hotel.id)"
      class="home-hotel-card"
    />

    <VModal
      :is-open="modalIsOpen"
      @close="modalIsOpen = false"
      title="Бронирование"
    >
      <template #title>{{ hotelInfo.name }}</template>
      <template #body>
        {{ hotelInfo.description }}
        {{ hotelInfo.price }}₽
      </template>
    </VModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Hotel } from "@/store/modules/home.d";
import Icon from "@/components/Icon/Icon.vue";
import VModal from "@/components/VModal.vue";
import HotelCard from "@/views/Home/components/HotelCard.vue";

const homeState = namespace("home");

@Component({
  name: "Home",
  components: { HotelCard, VModal, Icon }
})
export default class Home extends Vue {
  @homeState.State hotelsList!: Array<Hotel>;
  @homeState.Getter getHotelById!: Hotel;
  modalIsOpen = false;
  selectHotel = null;

  handleOpenModal(id) {
    this.selectHotel = id;
    this.modalIsOpen = true;
  }

  get hotelInfo() {
    return this.getHotelById(this.selectHotel);
  }
}
</script>

<style lang="less">
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  &-hotel-card {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
